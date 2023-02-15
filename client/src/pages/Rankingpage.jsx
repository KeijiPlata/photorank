import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FaCrown } from "react-icons/fa";

export default function Rankingpage() {
  return (
    <>
    <Header />
      <div className="grid grid-rows-3 grid-flow-col justify-center justify-items-center mt-10">
        <div className="row-start-2 row-span-2">
          <a href="https://unsplash.com/@mannyvt" target="_blank">
          <FaCrown className="lg:text-6xl md:text-5xl text-3xl mx-auto md:mb-2 text-gray-400" />
          <h2 className="text-center font-bold md:text-2xl text-lg myfont">
            2nd
          </h2>
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/profile-1553059011251-3641578c3926?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff")`,
            }}
            className="lg:w-44 lg:h-44 w-24 h-24 md:w-36 md:h-36 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <h2 className="text-center mt-1 font-bold md:text-2xl text-md">
            Manuel
          </h2>
          <p className="text-center mt-1 md:text-xl text-sm text-gray-500">
            5697 likes
          </p>
          </a>
        </div>
        <div className="row-end-3 row-span-2">
          <FaCrown className="lg:text-6xl md:text-5xl text-3xl mx-auto md:mb-2 text-yellow-500" />
          <h2 className="text-center font-bold md:text-2xl text-lg myfont">
            1st
          </h2>
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
            }}
            className="lg:w-44 lg:h-44 w-24 h-24 md:w-36 md:h-36 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <h2 className="text-center mt-1 font-bold md:text-2xl text-md">
            Keiji
          </h2>
          <p className="text-center mt-1 md:text-xl text-sm text-gray-500">
            6942 likes
          </p>
        </div>
        <div className="row-start-2 row-span-2">
          <a href="https://unsplash.com/@artofsinn" target="_blank">
          <FaCrown className="lg:text-6xl md:text-5xl text-3xl mx-auto md:mb-2 browncolor" />
          <h2 className="text-center font-bold md:text-2xl text-lg myfont">
            3rd
          </h2>
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/profile-1656173215700-52d6950e421e?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff")`,
            }}
            className="lg:w-44 lg:h-44 w-24 h-24 md:w-36 md:h-36 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <h2 className="text-center mt-1 font-bold md:text-2xl text-md">
           Sina
          </h2>
          <p className="text-center mt-1 md:text-xl text-sm text-gray-500">
            4892 likes
          </p>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:mx-32 md:mx-20 mt-10 mx-8">
        <div className="grid grid-cols-3 border-solid md:border-3 border-2 border-black rounded-lg relative">
          <a href="https://unsplash.com/@sandrogphotography" target="_blank">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/profile-1673701179293-d9cb004e01ddimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff")`,
            }}
            className="lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <div className="absolute top-2 lg:top-5 lg:left-40 md:left-32 left-24">
            <h2 className="mt-1 font-bold lg:text-2xl md:text-xl text-md">
              Sandro
            </h2>
            <p className="text-center mt-1 md:text-lg text-sm text-gray-500">
              4725 likes
            </p>
          </div>
          <div>
            <h2 className="mt-1 font-bold md:text-2xl text-md absolute md:right-14 right-6 lg:top-7 md:top-6 top-4 myfont">
              4th
            </h2>
          </div>
          </a>
        </div>

        <div className="grid grid-cols-3 border-solid md:border-3 border-2 border-black rounded-lg relative">
          <a href="https://unsplash.com/@mathildelangevin" target="_blank">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/profile-1601327292565-cc4c02215d36image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff")`,
            }}
            className="lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <div className="absolute top-2 lg:top-5 lg:left-40 md:left-32 left-24">
            <h2 className="mt-1 font-bold lg:text-2xl text-left md:text-xl text-md">
              Mathilde
            </h2>
            <p className="text-left mt-1 md:text-lg text-sm text-gray-500">
              4369 likes
            </p>
          </div>
          <div>
            <h2 className="mt-1 font-bold md:text-2xl text-md absolute md:right-14 right-6 lg:top-7 md:top-6 top-4 myfont">
              5th
            </h2>
          </div>
          </a>
        </div>

        <div className="grid grid-cols-3 border-solid md:border-3 border-2 border-black rounded-lg relative">
          <a href="https://unsplash.com/@miinrad" target="_blank">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/profile-1631698406510-ae2eec79e5beimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff")`,
            }}
            className="lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <div className="absolute top-2 lg:top-5 lg:left-40 md:left-32 left-24">
            <h2 className="mt-1 font-bold lg:text-2xl md:text-xl text-md">
              Mina
            </h2>
            <p className="text-center mt-1 md:text-lg text-sm text-gray-500">
              3961 likes
            </p>
          </div>
          </a>
          <div>
            <h2 className="mt-1 font-bold md:text-2xl text-md absolute md:right-14 right-6 lg:top-7 md:top-6 top-4 myfont">
              6th
            </h2>
          </div>
        </div>
            <a href="https://unsplash.com/@asapbg" target="_blank">
        <div className="grid grid-cols-3 border-solid md:border-3 border-2 border-black rounded-lg relative">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/profile-1666751249023-9763f075a6d2image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff")`,
            }}
            className="lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <div className="absolute top-2 lg:top-5 lg:left-40 md:left-32 left-24">
            <h2 className="mt-1 font-bold lg:text-2xl md:text-xl text-md">
              Brayan
            </h2>
            <p className="text-center mt-1 md:text-lg text-sm text-gray-500">
              3874 likes
            </p>
          </div>
          <div>
            <h2 className="mt-1 font-bold md:text-2xl text-md absolute md:right-14 right-6 lg:top-7 md:top-6 top-4 myfont">
              7th
            </h2>
          </div>
        </div>
        </a>

        <div className="grid grid-cols-3 border-solid md:border-3 border-2 border-black rounded-lg relative">
          <a href="https://unsplash.com/@bdilla810">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/profile-1669588115000-12ab9d3a957c?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff")`,
            }}
            className="lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <div className="absolute top-2 lg:top-5 lg:left-40 md:left-32 left-24">
            <h2 className="mt-1 font-bold lg:text-2xl md:text-xl text-md">
              Bruno
            </h2>
            <p className="text-center mt-1 md:text-lg text-sm text-gray-500">
              3785 likes
            </p>
          </div>
          <div>
            <h2 className="mt-1 font-bold md:text-2xl text-md absolute md:right-14 right-6 lg:top-7 md:top-6 top-4 myfont">
              8th
            </h2>
          </div>
          </a>
        </div>

        <div className="grid grid-cols-3 border-solid md:border-3 border-2 border-black rounded-lg relative">
          <a href="https://unsplash.com/@beyzahzah" target="_blank">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/profile-1668176249303-c40d1f012971?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff")`,
            }}
            className="lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <div className="absolute top-2 lg:top-5 lg:left-40 md:left-32 left-24">
            <h2 className="mt-1 font-bold lg:text-2xl md:text-xl text-md">
              Beyza
            </h2>
            <p className="text-center mt-1 md:text-lg text-sm text-gray-500">
              3521 likes
            </p>
          </div>
          <div>
            <h2 className="mt-1 font-bold md:text-2xl text-md absolute md:right-14 right-6 lg:top-7 md:top-6 top-4 myfont">
              9th
            </h2>
          </div>
          </a>
        </div>

        <div className="grid grid-cols-3 border-solid md:border-3 border-2 border-black rounded-lg relative">
          <a href="https://unsplash.com/@danielpelaezduque" target="_blank">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/profile-1567140919362-23e9430c30c0image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff")`,
            }}
            className="lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500"
          ></div>
          <div className="absolute top-2 lg:top-5 lg:left-40 md:left-32 left-24">
            <h2 className="mt-1 font-bold lg:text-2xl md:text-xl text-md">
              Bryan
            </h2>
            <p className="text-center mt-1 md:text-lg text-sm text-gray-500">
              2969 likes
            </p>
          </div>
          <div>
            <h2 className="mt-1 font-bold md:text-2xl text-md absolute md:right-14 right-6 lg:top-7 md:top-6 top-4 myfont">
              10th
            </h2>
          </div>
          </a>
        </div>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
