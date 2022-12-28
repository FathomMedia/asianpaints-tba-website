import Head from "next/head";
import { Formik } from "formik";
import React, { useEffect } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleSubmit = 1;
  const handleChange = 1;
  return (
    <>
      <Head>
        <title>Asian Paints</title>
        {/* <meta name="description" content="" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <div className="flex justify-center py-16">
            <Image
              src="/assets/apb_logo.png"
              alt="logo"
              width={350}
              height={50}
            />
          </div>
          <div className="mb-12 max-w-md">
            <h1 className="text-2xl font-bold">Hello!</h1>
            <p className=" text-gray-500">
              Please enter the details below and you will be contacted at your
              preferred time
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              <h3 className="mb-2">Full name</h3>

              <input
                type="name"
                placeholder="Your full name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </label>
            <label>
              <h3 className="mb-2">Phone number</h3>
              <input
                type="phone"
                name="phone"
                placeholder="Mobile Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
            </label>
            <label>
              <h3 className="mb-2">Preferred time to contact</h3>
              <select placeholder="Preferred time to contact">
                <option name="Morning">Morning</option>
              </select>
            </label>
            <label>
              <h3 className="mb-2">Service you are interested in</h3>
              <select>
                <option name="color-consultation">Color consultation</option>
                <option name="color-consultation">
                  Safe Painting Service (SPS)
                </option>
              </select>
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
