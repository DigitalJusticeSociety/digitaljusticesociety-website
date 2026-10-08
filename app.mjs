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
        url: "https://cloud.rewind.org.au/apps/calendar/p/fNf2kGArLrgtadrL",
        label: "Calendar",
        icon: "calendar",
      },
      {
        url: "https://digitaljusticesociety.org.au",
        label: "Matrix",
        icon: "message-circle",
      },
      {
        url: "https://adlsolarpunk.net/@digital_justice_society",
        label: "Mastodon",
        icon: "message-square-share",
      },
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
      {
        url: "https://www.instagram.com/digitaljusticesociety/",
        label: "Instagram",
        icon: "focus",
      },
    ],
    sections: [
      {
        label: "",
        groups: [
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
