export const blogPosts = [
  {
    id: 0,
    title: "Code Shift: When Legacy Systems Take a Turn",
    date: "Mar 25 2015",
    views: 0,
    image:
      "https://assets.techrepublic.com/uploads/2023/09/tr0092223-featuredimage-tiobe-index-news-september-2023-kotlin.jpg",
    description:
      "In the world of programming, legacy systems often play by their own rules. Explore the challenges and triumphs of developers as they navigate the complexities of legacy code, witnessing the surprising turns that can occur when modernization meets the past.",
  },
  {
    id: 1,
    title: "Unlocking the Hidden Power of JavaScript Libraries",
    date: "Feb 2 2017",
    views: 0,
    image:
      "https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming-languages-on-screen.jpg?itok=OfhT6z_M",
    description:
      "Within the vast landscape of JavaScript libraries lies untapped potential waiting to be harnessed. Join us on a journey to discover the secrets behind unlocking the hidden power of these libraries, propelling your projects to new heights.",
  },
  {
    id: 2,
    title: "The Power of Secrets: Encryption in Modern Web Development",
    date: "Jun 7 2022",
    views: 0,
    image: "https://network-programming.org/assets/img/news-icon.png",
    description:
      "Secrets and encryption form the backbone of secure web development. Delve into the intricate world of protecting data, exploring the power that encryption holds in safeguarding information and maintaining the integrity of online systems.",
  },
  {
    id: 3,
    title: "Power Struggles in Coding: Debugging and Resolving Conflicts",
    date: "Mar 3 2018",
    views: 0,
    image:
      "https://s3.amazonaws.com/abn-prod/wp-content/uploads/sites/3/2022/09/Scripps-News-logo-862x485.jpg",
    description:
      "Coding projects often involve power struggles in the form of bugs, conflicts, and errors. Learn effective strategies for debugging and resolving coding conflicts, gaining insights into maintaining the balance and harmony of your codebase.",
  },
  {
    id: 4,
    title: "Empowering Dev Teams: The Collective Strength of Collaboration",
    date: "May 2 2016",
    views: 0,
    image: "https://prod.wp.cdn.aws.wfu.edu/sites/22/2013/08/computercamp.jpg",
    description:
      "True power in the programming world lies in collaborative efforts. Explore the transformative impact of teamwork on development projects, featuring stories of development teams that have harnessed the collective strength of collaboration for success.",
  },
  {
    id: 5,
    title: "The Future of Programming: Navigating Paradigm Shifts in Tech",
    date: "Nov 5 2013",
    views: 0,
    image:
      "https://s16458.pcdn.co/wp-content/uploads/2022/09/A527_TOP-Programming-Blogs-News-Accounts-on-Twitter.jpg",
    description:
      "Programming is an ever-evolving field with paradigm shifts that shape its future. Join us in exploring the current and upcoming trends, technologies, and shifts that are defining the future of programming and influencing the tech landscape.",
  },
];

export function sortBlogPosts() {
  blogPosts.sort((a, b) => {
    if (a.views !== b.views) {
      return b.views - a.views;
    }
    // If views are equal, sort by date in descending order
    if (a.date !== b.date) {
      return new Date(b.date) - new Date(a.date);
    }
    // If date is also equal, sort by title in ascending order
    return a.title.localeCompare(b.title);
  });
}

sortBlogPosts();
