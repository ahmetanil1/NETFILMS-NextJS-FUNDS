
import React from 'react'
import HomeContainer from '@/containers/home'

import Movies from "@/mocks/movies.json";

async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
async function homePage({ params }) {
    await delay(2000);
    // console.log(params);
    let selectedCategory;

    if (params.category?.length > 0) {
        // CATEGORY? YAPMA NEDENİ PARAMSDAN KATEGORİ GELİP GELMEDİĞİNİ KONTROL ET GELİRSE LENGTH AL 
        selectedCategory = true;
    }
    return (
        <HomeContainer
            selectedCategory={{
                id: params.category?.[0] ?? "",
                movies: selectedCategory ? Movies.results.slice(0, 7) : []
                // SELECTEDCATEGORY BULURSAN MOVİESİN RESULT DEĞERİNİN 0 7 ARASIfDA BÖL VE GÖSTER DEMEKTİR 
            }}
        />
    )
}

export default homePage
