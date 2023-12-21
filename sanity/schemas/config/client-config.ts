const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2023-12-19",
  useCdn: false,
};

export default config;
