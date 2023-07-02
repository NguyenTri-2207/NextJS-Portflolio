import { getSanityContent } from "common/sanity";

export default function Page(pageData) {
  console.log(pageData);
  return <pre>a</pre>;
}

export async function getStaticProps({ params }) {
  console.log(params);
  const data = await getSanityContent({
    query: `
       query PageBySlug($slug: String!) {
        allPost(where: { slug: { current: { eq: $slug } } }) {
           title
           bodyRaw
         }
       }
     `,
    variables: {
      slug: params.news,
    },
  });
  console.log(data);
  const [pageData] = data.allPost;

  return {
    props: {
      pageData: pageData,
    },
  };
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query AllPages {
        allPost {
          slug {
            current
          }
        }
      }
    `,
  });

  const pages = data.allPost;
  const paths = pages.map((post) => {
    return {
      params: { news: `${post.slug.current}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
// https://tringuyen.sanity.studio/vision
