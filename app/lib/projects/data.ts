"use server"

import { sql } from "@vercel/postgres";
import { Project } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const ProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
  });

export async function getProjects(): Promise<Project[]> {
    noStore();

    try {
        const data = await sql<Project>`
        SELECT id, title, description, created_at
        FROM projects
        ORDER BY created_at;
        `

        return data.rows
    } catch (error) {
        console.log(error)
        throw new Error(`Failed to getProjects() ${error}`)
    }
}

export async function getProjectById(id: string): Promise<Project | { error: string }> {
    noStore();

    try {
        const data = await sql<Project>`
        SELECT id, title, description, created_at
        FROM projects
        WHERE id = ${id};
        `

        return data.rows[0]
    } catch (error) {
        console.log(error)
        return { error: `Failed to getProjects() ${error}` }
    }
}

export async function postProject(form: FormData) {

    try {
        const validatedForm = ProjectSchema.safeParse({
            title: form.get("title"),
            description: form.get("description")
        })

        if (!validatedForm.success) {
            throw new Error(`Failed to postProject(), validation error: ${validatedForm.error}`);
        }

        await sql`
        INSERT INTO projects (title, description, created_at)
        VALUES (${validatedForm.data.title}, ${validatedForm.data.description}, NOW())
        `

    } catch (error) {
        console.log(error)
        throw new Error(`Failed to postProject(), error: ${error}`)
    }

    revalidatePath("/projects")
    redirect("/projects")
}

export async function editProject(id: string, form: FormData) {
    try {
        const validatedForm = ProjectSchema.safeParse({
            title: form.get("title"),
            description: form.get("description")
        })

        if (!validatedForm.success) {
            throw new Error(`Failed to editProject(), validation error: ${validatedForm.error}`);
        }

        await sql`
        UPDATE projects SET title = ${validatedForm.data.title}, description = ${validatedForm.data.description} WHERE id = ${id}
        `
    } catch (error) {
        console.log(error)
        throw new Error(`Failed to editProject(), error: ${error}`)
    }

    revalidatePath("/projects")
    redirect("/projects")
}

export async function deleteProject(id: string) {
    try {
        await sql`
        DELETE FROM projects WHERE id = ${id}
        `
    } catch (error) {
        console.log(error)
        throw new Error(`Failed to deleteProject(), error: ${error}`)
    }

    revalidatePath("/projects")
    redirect("/projects")
}
