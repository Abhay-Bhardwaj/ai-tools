export const Templates = [
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on the content you provide.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich text enditor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your Blog title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter your Blog outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that generates blog content based on the title you provide.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    aiPrompt:
      "Write a blog post based on the given title and outline. The blog post should be between 500-1000 words.",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your Blog title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter your Blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Blog Topic Idea",
    desc: "An AI tool that generates blog topic ideas based on the given niche and outline.",
    category: "Blog",
    icon: "/icons/blog-topic-idea.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet points based on the given niche.",
    slug: "generate-blog-topic-idea",
    form: [
      {
        label: "Enter your Blog title",
        field: "input",
        name: "title",
        required: true,
      },
    ],
  },
  {
    name: "YouTube SEO Titles",
    desc: "An AI tool that generates SEO-friendly titles for YouTube videos.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    aiPrompt:
      "Generate an SEO-friendly title for your YouTube video based on the title & content provided.",
    slug: "generate-youtube-seo-titles",
    form: [
      {
        label: "Enter your video topic/title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter your video Outline",
        field: "textarea",
        name: "content",
      },
    ],
  },
  {
    name: "YouTube Video Description",
    desc: "An AI tool that generates descriptions for YouTube videos.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    aiPrompt:
      "Write a description for your YouTube video based on the title and content.",
    slug: "generate-youtube-video-description",
    form: [
      {
        label: "Enter your video title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter your video content",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "An AI tool that improves the quality and readability of text.",
    category: "Text",
    icon: "/icons/text-improver.png",
    aiPrompt: "Improve the quality and readability of the given text.",
    slug: "improve-text",
    form: [
      {
        label: "Enter your text you want to re-write",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];
