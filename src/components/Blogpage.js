import React from "react";
import img from "../assets/img.jpg";
import "./css/Blogpage.css";
import Image from "./Image";
export default function Blogpage() {
  return (
    <main className="container px-5 pb-5 mx-auto">
      <article>
        <div className="pb-5">
          <h1 className="pt-4 pb-2 text-2xl font-medium md:text-4xl lg:text-6xl lg:py-4">
            How to build a strong community
          </h1>
          <p className="pb-2 text-sm text-gray-600">
            by{" "}
            <span className="font-medium text-gray-700 underline">
              Muktadir
            </span>{" "}
            on <span>Apr 23, 1202</span>
          </p>
        </div>
        <Image height="6" width="16" src={img} alt="alt-text" />
        <div className="text-gray-600 blog-content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            accusantium ipsam officiis reiciendis sequi nulla eius sapiente! Ex
            nesciunt officia voluptatum expedita eveniet harum quisquam culpa
            architecto eos commodi! Autem unde dicta nulla voluptates aperiam
            fugiat repellat eveniet, blanditiis laboriosam. Quis illum velit,
            consectetur aut nobis deserunt tempora minus, natus reprehenderit
            eligendi voluptatibus ipsa laborum iure reiciendis omnis, est magnam
            dolores cum corrupti inventore? Accusamus, tempore quo, quae quia
            architecto veritatis saepe laborum neque iusto exercitationem minus
            sunt facere, laboriosam impedit laudantium labore delectus
            doloribus! Hic quasi molestiae quod dignissimos officia ducimus
            dolor laboriosam, laborum facilis pariatur deleniti. Recusandae,
            porro.
          </p>
        </div>
      </article>
    </main>
  );
}
