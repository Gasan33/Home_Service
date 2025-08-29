"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../_services/GlobalApi";
import BusinessList from "../../../_components/BusinessList";

const BusinessByCategory = ({ params }) => {
    const unwrappedParams = React.use(params);
    const [businessList, setbusinessList] = useState([]);

    useEffect(() => {
        console.log(unwrappedParams);
        if (unwrappedParams) {
            getBusinessList();
        }
    }, [unwrappedParams]);

    const getBusinessList = () => {
        GlobalApi.getBusinessByCategory(unwrappedParams.category).then((resp) => {
            setbusinessList(resp?.businessLists);
        });
    };

    return <div><BusinessList title={unwrappedParams?.category} businessList={businessList} /></div>;
};

export default BusinessByCategory;
