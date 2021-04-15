import Link from "next/link";
import React from "react";
import Button from "../Button";

const Company = () => {
  return (
    <div className="w-240 flex flex-col place-items-center">
      <h1 className="text-7xl font-mono pt-32 pb-32">
        Settings pace for the modern tech companies
      </h1>
      <div className="flex justify-between">
        <div className="flex-row justify-between w-32 text-2xl">
          Exceptional tech side
        </div>
        <div className="flex-col">
          <div className="text-2xl">
            We fight mediocrity in development practices and insert ourselves to
            the product teams to tackle projects with confidence, together.
          </div>
          <div className="grid grid-cols-3 grid-rows-3 justify-items-start gap-32">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
          <div className="pt-4">
            <Button kind="secondary">
              <Link href="#">Learn how we apply it</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
