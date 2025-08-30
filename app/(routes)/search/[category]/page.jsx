"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../_services/GlobalApi";
import BusinessList from "../../../_components/BusinessList";
import HeaderPath from "../../../_components/HeaderPath";

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

    return <div>
        <HeaderPath title={unwrappedParams?.category} path="/about" style="mx-0" />
        <BusinessList title={unwrappedParams?.category} businessList={businessList} />
    </div>;
};

export default BusinessByCategory;
