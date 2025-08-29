"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import GlobalApi from "../../../_services/GlobalApi";
import BusinessInfo from "../_components/BusinessInfo";
import BusinessDescription from "../_components/BusinessDescription";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";

const BusinessDetail = ({ params }) => {
    const unwrappedParams = React.use(params);

    const { data, status } = useSession();

    const [business, setBusiness] = useState([]);

    useEffect(() => {
        if (unwrappedParams?.businessId) {
            getBusinessById();
        }
    }, [unwrappedParams]);

    useEffect(() => {
        checkUserAuth();
    }, [status]);

    const checkUserAuth = () => {
        if (status === "loading") {
            return <div>Loading...</div>;
        }
        if (status === "unauthenticated") {
            signIn("descope");
        }
    };

    const getBusinessById = () => {
        GlobalApi.getBusinessById(unwrappedParams.businessId).then((resp) => {
            setBusiness(resp.businessList);
        });
    };

    return status === "authenticated" && (
        <div className="py-8 md:py-20 px-10 md:px-36">
            <BusinessInfo business={business} />
            <div className="grid grid-cols-3 mt-16">
                <div className="col-span-3 md:col-span-2 order-last md:order-first">
                    <BusinessDescription business={business} />

                </div>
                <div className="">
                    <SuggestedBusinessList business={business} />
                </div>
            </div>
        </div>
    );
};

export default BusinessDetail;
