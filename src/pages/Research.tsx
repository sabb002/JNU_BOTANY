import { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import "./Research.css";

export default function Reasearch() {
  useEffect(() => {
    document.title = "Research - Jnu Botany";
  }, []);

  return (
    <>
      <section className="research main">
        <h2 className="title">Research</h2>
        <div className="image"></div>
        <p className="des">
          Department of Botany conducts cutting-edge fundamental research in a
          variety of areas, ranging from the microcosm of microbes and protein
          production to the macrocosm of ecological systems, and from the
          elucidation of genetic code to the exploration of physiological
          mechanisms. Our department is known for its active involvement and
          high productivity in various domains of applied research, which are
          dedicated to advancing scientific knowledge and addressing real-world
          challenges.
        </p>
        <div className="box">
          <h4>Research areas</h4>
          <ul>
            <li>Plant Taxonomy, Chemotaxonomy and Phytochemisty</li>
            <li>Mycology and Plant Pathology</li>
            <li>Plant Breeding, Genetics and Biotechnology</li>
            <li>Plant Ecology and Environmental Science</li>
            <li>Microbiology and Microbial Biotechnology</li>
            <li>Plant Physiology and Biochemistry</li>
            <li>Hydrobiology and Limnology</li>
            <li>Cytology and Cytogentics</li>
          </ul>
        </div>
      </section>
      <section className="researchPaper">
        <h2 className="title">Recent Studies</h2>
        <div className="eachYear">
          <h5>2021</h5>
          <ul>
            <li>
              Extraction, separation and identification of antifungal and
              antibacterial compounds from native Actinomycetes. A Ph.D.
              research work. Conducting by: Razia Sultana. Superving by: Prof.
              Dr. Kazi Shakhawath Hossain.
            </li>
            <li>
              The development of purple supersweet sweetcorn. A Ph.D. research
              work. Conducting at University of Queensland, Autralia. Financed
              by: University of Queensland Research Training Scholarship (PhD).
            </li>
          </ul>
        </div>
        <div className="eachYear">
          <h5>2020</h5>
          <ul>
            <li>
              Biocontrol potentiality of Actinomycetes against some soil borne
              plant pathogenic fungi. PI: Prof. Dr. Kazi Shakhawath Hossain.
              Financed by: Jagannath University, Dhaka and UGC Bangladesh.
            </li>
            <li>
              Comparative study of biological activities and hypoglycemic
              properties of Gynura procumbens and Gynura nepalensis from in
              vitro grown callus and in vivo grown plants (2020). PI: Dr. G.M.
              Al-Amin, Associate Professor. Financed by: Jagannath University,
              Dhaka and UGC Bangladesh.
            </li>
            <li>
              “Genome size and chromosome number survey in genus Mangifera from
              Bangladesh”. PI: Dr. Nusrat Sultana, Assistant Professor. Financed
              by: Ministry of Science and Technology, Govt. of the People's
              Republic of Bangladesh
            </li>
            <li>
              “Bioinformatics and molecular characterization of satellite
              repeats from Mangifera germplam. PI: Dr. Nusrat Sultana, Assistant
              Professor. Financed by: Jagannath University, Dhaka and UGC
              Bangladesh.
            </li>
            <li>
              Effects of Waterlogging stress on Antioxidant enzyme activities
              and Anatomical study in Rice (Oryza sativa L.) PI: Shukanta Saha,
              Lecturer. Financed by: Jagannath University, Dhaka and UGC
              Bangladesh.
            </li>
          </ul>
        </div>
        <div className="eachYear">
          <h5>2019</h5>
          <ul>
            <li>
              Diversity of Basidiomycetous macrofungi in the Baldha garden,
              Wari, Dhaka. Year: 2018-2019. PI: Prof. Dr. Kazi Shakhawath
              Hossain, Financed by: Jagannath University, Dhaka and University
              grant commission
            </li>
            <li>
              Soil borne Actinomycetes isolated from three upazilla of the
              Sylhet district of Bangladesh and their antibiotic production
              potentiality. A dissertation for M.Sc. degree. Conducted by
              Mahmuda Hasan (M170601009), Supervised by: Prof. Dr. Kazi
              Shakhawath Hossain
            </li>
            <li>
              The Effect of Waterlogging on Physiological and Biochemical
              parameters in Rice (Oryza sativa L.) PI: Shukanta Saha, Lecturer.
              Financed by: Jagannath University, Dhaka and UGC Bangladesh.
            </li>
            <li>
              Association of Fungi in some Selected Varieties of Wheat (Triticum
              aestivum L.) Seeds and their Control by Chemicals and Botanicals.
              A dissertation for M.Sc. degree conducting by Most. Shida Rumman
              (M170601015). Supervisors: Mst. Selina Momtaz.
            </li>
            <li>
              Biological Investigations of Woodfordia fruticosa (L.) Kurz. A
              dissertation for M.Sc. degree conducting by Md. Mahfuzur Rahman
              (M170601017). Supervisors: Dr. Nahid Sultana
            </li>
            <li>
              Bioremediation of arsenic (As) by bacterial and plant biomass from
              groundwater. A dissertation for M.Sc. degree conducting by Md.
              Nazmul Hossain (M 170601007). Supervisors: Dr. Sumi Akter.
            </li>
            <li>
              Chemical Pollution and Bacterial Status in the Water of Gulshan
              Lake, Dhaka. A dissertation for M.Sc. degree conducting by Shupti
              Rani Bhadra (M170601034). Supervisors: Dr. Mohammad Ali.
            </li>
            <li>
              Distribution and Diversity Studies of Macro Fungi (Mushroom) in
              Parks and Uddyans of Dhaka. A dissertation for M.Sc. degree
              conducting by Md. Abdul Jabbar (M170601045). Supervisors:
              Professor Dr. Md. Maniruzzman Khandaker.
            </li>
            <li>
              Effects of Waterlogging Stress on Physiological and Biochemical
              Parameters and Anatomical Responses in Five Varieties of Rice
              (Oryza Sativa L.). A dissertation for M.Sc. degree conducting by
              Zarin Tabassum (M170601023). Supervisors: Dr. Hasna Hena Begum and
              Shukanta Saha.
            </li>
            <li>
              Growth, Yield and Biochemical Responses of BARI MUNG-6 (VIGNA
              RADIATA L. WILCZEK) to GA3 Application. A dissertation for M.Sc.
              degree conducting by Rizia Pervin Misty (M170601035). Supervisors:
              Dr. Hasna Hena Begum.
            </li>
            <li>
              In Vitro Regeneration and Agrobacterium-mediated Genetic
              Transformation of Brassica campestris L. var. Tori-7. A
              dissertation for M.Sc. degree conducting by Tamanna Islam Toma
              (M170601001). Supervisors: Mr. Bivas Kumar Sarkar.
            </li>
            <li>
              Integrated Use of Symbiont Fungus, Cow dung and Phosphorus in
              Producing Pumpkin (Cucurbita maxima) Seedling. A dissertation for
              M.Sc. degree conducting by Mumtahina Parvin (M170601030).
              Supervisors: Dr. Shahrear Ahmad.
            </li>
            <li>
              Karyotype Diversity Among Twelve Varities of Brassica L. from
              Bangladesh. A dissertation for M.Sc. degree conducting by Susmita
              Saha (M170601036). Supervisors: Dr. Kazi Nahida Begum.
            </li>
            <li>
              Physiological, Biochemical and Yield Responses of BARRI Dhan-48
              (Oryza Sativa L.) Following NAA Application. A dissertation for
              M.Sc. degree conducting by Md. Sharif Mia (M170601018).
              Supervisors: Dr. A. M. M. Golam Adam.
            </li>
            <li>
              Soil Borne Actinomycetes Isolated from Three Upazila of the Sylhet
              District of Bangladesh and their Antibiotic Production
              Potentiality. A dissertation for M.Sc. degree conducting by
              Mahmuda Hasan (M170601009). Supervisors: Professor Dr. Kazi
              Shakhawath Hossain.
            </li>
          </ul>
        </div>
        <div className="eachYear">
          <h5>2018</h5>
          <ul>
            <li>
              Sex-chrom: a database on plant sex chromosomes.
              https://sexchrom.csic.es PI: Dr. Nusrat Sultana, Assistant
              Professor
            </li>
            <li>
              Investigation of Genome Size Diversity in Vascular Plant Specimens
              Sampled from Antarctica. Conducted by: Dr. Nusrat Sultana,
              Assistant Professor. Financed By: III National Antarctic
              Expedition Research Projects, Istanbul Technical University
            </li>
            <li>
              Bioinformatics and molecular characterization of tandemly
              organized repetitive DNA family in highbush blueberry cultivar
              ‘Jubilee’ (Vaccinium corymbosum L.) genome”. Conducted by: Dr.
              Nusrat Sultana.Assistant Professor. Scientific Research Projects
              Unit (BAP) of Niğde Ömer Halisdemir University provided FEB
              2017/18 DOKTEP project.
            </li>
            <li>
              Physiological and Biochemical Characterization of Drought
              Responses and Screening of Drought Tolerant Rice Varieties. PI:
              Prof. Dr. Hasna Hena Begum, Co-PI: Mr. Shukanta Saha, Lecturer.
              Financed by: Jagannath University, Dhaka and UGC Bangladesh.
            </li>
          </ul>
        </div>
        <div className="eachYear">
          <h5>2017</h5>
          <ul>
            <li>
              Amylase production protocol from agricultural wastes by mold.
              Project no. BS152, Year: 2016-2017. PI: Prof. Dr. Kazi Shakhawath
              Hossain, Co-PI: A.M.M. Golam Adam, Assistant Professor. Financed
              by: Ministry of Science and Technology, Govt. of the Peoples
              Republic of Bangladesh
            </li>
            <li>
              Effects of Drought stress on Physiological and Biochemical
              parameters in Rice (Oryza sativa L. var. BRRI DHAN-24). PI: Prof.
              Dr. Hasna Hena Begum, Co-PI: Mr. Shukanta Saha, Lecturer. Financed
              by: Jagannath University, Dhaka and UGC Bangladesh.
            </li>
          </ul>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
