"use client"
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import BusinessList from "./_components/BusinessList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import AboutUs from "./_components/AboutUs";
import MaidsList from "./_components/MaidsList";
import Contact from "./_components/Contact"

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  const [maidsList, setMaidsList] = useState([]);


  useEffect(() => {
    getCategoryList();
    getAllMaidsList();
    getAllBusinessList();
  }, [])
  const getCategoryList = () => {
    GlobalApi.getCategory().then(res => {
      setCategoryList(res.categories);
    })
  }
  const getAllMaidsList = () => {
    GlobalApi.GetAllMaids().then(resp => {
      console.log(resp);
      setMaidsList(resp.maids)
    })
  }
  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then(resp => {
      console.log(resp);
      setBusinessList(resp.businessLists)
    })
  }
  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <MaidsList maidsList={maidsList} title={"Newst Maids"} />
      <BusinessList businessList={businessList} title={"Popular Businesses"} />
      <AboutUs />

      <Contact />

    </div>
  );
}
