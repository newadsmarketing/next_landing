import type { NextPage } from "next"
import Head from "next/head"
import { data } from "../content/data";

import logo from "../src/assets/logo.png";

import { Navbar } from '../src/components/Navbar';
import { Hero } from '../src/components/Hero';
import { Step } from "../src/common/Step";
import { ButtonLead } from "../src/components/ButtonLead";
import { Footer } from "../src/components/Footer";

const Home: NextPage = () => {
  return (
    <>
        <Head>
          <title>치트마켓 배그핵 서든핵 옵치핵 최저가판매</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="국내 최저가 배그핵 서든핵 옵치핵 등 다양한 제품 최대보유중 정지없는 랭커용 방송용 슬롯제 최대할인 이벤트 24시간 고객센터 운영중"
          />
          <meta name="google-site-verification" content="3wcyWc8oQr4ZTV2JB7qTSzJ34RE9JKk-X-Lklmx-IV8" />
        </Head>

        <main className="box-border">
            <div className="flex flex-col">
                <Navbar logo={logo} />
                <Hero
                  appType={data.hero.appType}
                  tagLine={data.hero.tagLine}
                  description={data.hero.description}
                  mainActionText={data.hero.extraActionText}
                  extraActionText={data.hero.extraActionText}
                />
                
            </div>
            
            
            <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto " />
            
            <h3 id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">
              How the app works
            </h3>

            {
              data.listStep.map((step) => {
                return (
                  <Step key={step.title}
                    title={step.title}
                    heading={step.heading}
                    description={step.description}
                    img={step.img}
                    alternate={step.alternate}
                  />
                )
              })
            }

            <ButtonLead
              actionText={data.bottomLead.actionText}
  extraActionText={data.bottomLead.extraActionText}
  mainActionText={data.bottomLead.mainActionText}
  description={data.bottomLead.description}

            />

            <Footer logo={logo} />
        </main>
    </>
  );
};

export default Home;
