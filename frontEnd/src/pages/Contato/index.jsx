import React from "react";

import Header from "../../components/Header";
import FormContato from "../../components/FormContato"
import BannerContato from "../../components/BannerContato";
import Footer from "../../components/Footer";



export default function Contato() {
  return (
        <div>
        <Header/>
        <BannerContato/>
        <div>
          <FormContato/>
        </div>
        <Footer />
    </div>
  );
}
