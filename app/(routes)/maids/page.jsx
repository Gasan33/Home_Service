"use client"
import React, { useEffect, useState } from "react"
import HeaderPath from "../../_components/HeaderPath"
import GlobalApi from "../../_services/GlobalApi"
import MaidsList from "../../_components/MaidsList"
import { Checkbox } from "@/components/ui/checkbox"

const Maids = () => {
    const [maidsList, setMaidsList] = useState([])
    const [selectedNational, setSelectedNational] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("")
    const [selectedReligion, setSelectedReligion] = useState("")

    const nationalList = [
        "Ugandan",
        "Kenyan",
        "Indonesian",
        "Bangladeshi",
        "Filipino",
        "Somali",
        "Indian",
    ]

    useEffect(() => {
        getAllMaidsList()
    }, [])

    const getAllMaidsList = () => {
        GlobalApi.GetAllMaids().then((resp) => {
            setMaidsList(resp.maids)
        })
    }

    const getMaidsListByNationality = (nationality) => {
        setSelectedNational(nationality)
        GlobalApi.GetMaidsByNationality(nationality).then((resp) => {
            setMaidsList(resp.maids)
        })
    }

    const getMaidsListByLanguage = (language) => {
        setSelectedLanguage(language)
        GlobalApi.GetMaidsByLanguages(language).then((resp) => {
            setMaidsList(resp.maids)
        })
    }

    const getMaidsListByReligion = (religion) => {
        setSelectedReligion(religion)
        GlobalApi.GetMaidsByReligion(religion).then((resp) => {
            setMaidsList(resp.maids)
        })
    }

    const clearFilters = () => {
        setSelectedLanguage("")
        setSelectedReligion("")
        getAllMaidsList()
    }

    return (
        <div className="mt-6">
            <HeaderPath title="Maids" path="/maids" style="mx-0" />

            {/* Nationalities Scroll */}
            <div className="mt-6">
                <div className="flex gap-2 items-center justify-start overflow-x-scroll cursor-pointer overflow-y-hidden h-12 p-2 md:h-16 rounded-full bg-[#d6e0ff]">
                    {nationalList.map((nationality) => {
                        const slug = nationality.toLowerCase()
                        const isActive = selectedNational === nationality

                        return (
                            <div
                                key={slug}
                                onClick={() => getMaidsListByNationality(nationality)}
                                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-nowrap cursor-pointer text-sm transition-colors duration-200 ${isActive
                                    ? "bg-white text-black shadow"
                                    : "text-gray-600 hover:bg-white/60"
                                    }`}
                            >
                                {nationality.toUpperCase()}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Filters Section */}
            <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-6">
                {/* Languages */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">Languages</h2>
                    <div className="flex mt-2 gap-6">
                        {["English", "Arabic"].map((lang) => (
                            <div
                                key={lang}
                                className="flex flex-row items-center gap-2 cursor-pointer"
                            >
                                <Checkbox
                                    checked={selectedLanguage === lang}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            getMaidsListByLanguage(lang)
                                        } else {
                                            clearFilters()
                                        }
                                    }}
                                    className="w-6 h-6"
                                />
                                <span className="text-gray-800 text-lg font-medium">{lang}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Religions */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">Religion</h2>
                    <div className="flex mt-2 gap-6">
                        {["Christian", "Muslim"].map((rel) => (
                            <div
                                key={rel}
                                className="flex flex-row items-center gap-2 cursor-pointer"
                            >
                                <Checkbox
                                    checked={selectedReligion === rel}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            getMaidsListByReligion(rel)
                                        } else {
                                            clearFilters()
                                        }
                                    }}
                                    className="w-6 h-6"
                                />
                                <span className="text-gray-800 text-lg font-medium">{rel}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Maids List */}
            <MaidsList maidsList={maidsList} title="Newest Maids" />
        </div>
    )
}

export default Maids
