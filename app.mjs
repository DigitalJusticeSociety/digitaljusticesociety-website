// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Digital Justice Society",
  description: "A blog for the DJS team :)",
  editThisNote: {
    url: "https://codeberg.org/digitaljusticesociety/digitaljusticesociety-website/edit/{{branch}}/{{file}}",
  },
  staticAssets: {
    paths: { "public/": "/" },
  },
  ignores: ["README.md", "CHANGELOG.md"],
  customProperties: {
    properties: [
      {
        path: "props",
        options: {
          date: {
            locale: "en-AU",
          },
        },
      },
    ],
  },
  sidebar: {
    links: [
      {
        url: "https://codeberg.org/digitaljusticesociety/",
        label: "codeberg",
        icon: "folder-git-2",
      },
      {
        url: "https://handbook.digitaljusticesociety.org",
        label: "handbook",
        icon: "book",
      },
    ],
    sections: [
      {
        label: "About us",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/[^/]+$",
              tags: ["about"],
            }),
          },
        ],
      },
      {
        label: "Our Projects",
        groups: [
          {
            label: "Gardenbed",
            query: createNotesQuery({
              pattern: "^/gardenbed/",
              tree: {
                replace: {
                  "^/\\w+": "",
                },
              },
            }),
          },
          {
            label: "Digital Lounge",
            query: createNotesQuery({
              pattern: "^/digitallounge/",
              tree: {
                replace: {
                  "^/\\w+": "",
                },
              },
            }),
          },
          {
            label: "Breakup with Spotify",
            query: createNotesQuery({
              pattern: "^/breakupspotify/",
              tree: {
                replace: {
                  "^/\\w+": "",
                },
              },
            }),
          },
        ],
      },
      {
        label: "Blog",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/blog/",
            }),
          },
        ],
      },
    ],
  },
  tags: {
    map: {
      "dynamic-content": "dynamic content",
    },
  },
});
