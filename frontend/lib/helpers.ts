import { getCSVData } from "@/app/(actions)/common";

import { IOption } from "@/types/common";

export function normalizeAccessToken(token: string): string {
  return token.replace(/"/g, "");
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getSkillsList(): Promise<Array<IOption>> {
  const data: Array<string> = await getCSVData(
    "lib/constants/technologies.csv"
  );

  const skills: Array<IOption> = data.map((skill: string) => {
    return { value: skill, label: capitalize(skill) };
  });

  return skills;
}
