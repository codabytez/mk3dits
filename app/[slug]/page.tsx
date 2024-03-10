import React from "react";
import { NextPage } from "next";
import Project from "@/components/projectPage/project";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage: NextPage<ProjectPageProps> = () => <Project />;

export default ProjectPage;
