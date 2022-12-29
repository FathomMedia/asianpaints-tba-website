import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Loader from "../components/Loader";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [names, setNames] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("Morning");
  const [service, setService] = useState("Color Consultation");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!names || !phone || !time || !service) return;
    setIsLoading(true);
    const hubspot_response = await submit_hubspot_form(
      names,
      phone,
      time,
      service
    );
    console.log(hubspot_response);
    setIsLoading(false);
  };
  const submit_hubspot_form = async (
    names: any,
    phone: any,
    time: any,
    service: any
  ) => {
    let formGuid =
      service === "Color Consultation"
        ? "9586fd0f-3308-4089-b958-911b5525d3cd"
        : "ad576a9c-5fe1-4900-9e95-9ea94c549d6e";

    const portalId = "26763700";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // console.log(formGuid);

    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        portalId,
        formGuid,
        fields: [
          {
            name: "names",
            value: names,
          },
          {
            name: "phone",
            value: phone,
          },
          {
            name: "time",
            value: time,
          },
          {
            name: "service",
            value: service,
          },
        ],
      },
      config
    );
    return response;
    console.log(response);
  };
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
          <div className="flex justify-center py-8">
            <Image
              src="/assets/apb_logo.png"
              alt="logo"
              width={250}
              height={50}
            />
          </div>
          <div className="form-container">
            <div className="mb-12 max-w-xl">
              <h1 className="text-2xl font-bold mb-1">
                Welcome to Asian Paints Berger
              </h1>
              <p className=" text-gray-500">
                Please enter the details below and you will be contacted at your
                preferred time.
              </p>
            </div>
            <form onSubmit={handleSubmit} method="POST">
              <label>
                <h3 className="mb-2">Full name</h3>

                <input
                  type="text"
                  placeholder="Your full name"
                  name="names"
                  value={names}
                  onChange={(e) => setNames(e.target.value)}
                />
              </label>
              <label>
                <h3 className="mb-2">Phone number</h3>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label>
                <h3 className="mb-2">Preferred time to contact</h3>
                <select
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value={"Morning"} id="Morning">
                    Morning
                  </option>
                  <option value={"Afternoon"}>Afternoon</option>
                </select>
              </label>
              <label>
                <h3 className="mb-2">Service you are interested in</h3>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value={"Color Consultation"} id="Color Consultation">
                    Color consultation
                  </option>
                  <option value={"Safe Painting Service (SPS)"}>
                    Safe Painting Service (SPS)
                  </option>
                </select>
              </label>
              <button
                className="disabled:bg-gray-500 mt-4"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : <p>Submit</p>}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
