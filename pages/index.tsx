import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout title="Home | Rare.fi">
      <h1>Rare.fi</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
