import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const HospitalServicePage = () => {
  const [category, setCategory] = useState("Ambulance"); 
  const [procedure, setProcedure] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filteredProcedures, setFilteredProcedures] = useState([]);
  const [autocompleteVisible, setAutocompleteVisible] = useState(false);

  const procedureData = {
    Ambulance: ['Ambulance per mile',
    'Advanced life support (Level 1) ambulance - Non-emergency transport',
    'Advanced life support (Level 1) ambulance - Emergency transport',
    'Basic life support ambulance - Non-emergency transport',
    'Basic life support ambulance - Emergency transport',
    'Advanced life support (Level 2) ambulance',
    'Specialty care transport (between facilities) ambulance'],
    
    Behavioral: ['Diagnostic Evaluation' ,
    'Diagnostic evaluation with medical services' ,
    'Psychotherapy (30 min)' ,
    'Psychotherapy (45 min)' ,
    'Psychotherapy (60 min)' ,
    'Psychotherapy - Family' ,
    'Psychotherapy - Group (non-family)' ,
    'Psychological testing - Per hour - Administered by psychologist or therapist' ,
    'Psychological testing - Per hour - Administered by technician' ,
    'Psychological testing - Per hour - Administered by computer' ,
    'Aphasia assessment' ,
    'Developmental testing' ,
    'Neurobehavioral status exam (assessment of thinking, reasoning, and judgment) - Per hour' ,
    'Neuropsychological testing - Per hour - Administered by psychologist or therapist' ,
    'Neuropsychological testing - Per hour- Administered by technician' ,
    'Neuropsychological testing - Administered by computer' ,
    'Health and Behaviorial Assessment - Initial assessment (15 min)' ,
    'Health and Behaviorial Assessment - Re-assessment (15 min)' ,
    'Health and Behaviorial intervention - Individual (15 min)' ,
    'Health and Behaviorial intervention - Group (15 min)' ,
    'Health and Behaviorial intervention - Family With patient (15 min)' ,
    'Health and Behaviorial intervention - Family without patient (15 min)' , ,],

    Colonoscopies: ['Endoscopy with biopsy - performed alone',
    'Endoscopy with biopsy - performed with colonoscopy' ,
    'Endoscopy with biopsy - performed with polyp removal' ,
    'Colonoscopy diagnostic - performed alone',
    'Colonoscopy diagnostic with endoscopy' ,
    'Colonoscopy with biopsy - performed alone' ,
    'Colonoscopy with biopsy - performed with endoscopy' ,
    'Colonoscopy with biopsy - performed with polyp removal' ,
    'Colonoscopy colorectal cancer screening (high-risk individual) - performed alone' ,
    'Colonoscopy colorectal cancer screening (high-risk individual) performed with endoscopy' ,
    'Colonoscopy colorectal cancer screening (non-high-risk individual) - performed alone' ,
    'Colonoscopy colorectal cancer screening (non-high-risk individual) performed with endoscopy' ],

    Emergency: ['Minor Problems' ,
    'Low to moderate severity problems' ,
    'Moderate severity problems' ,
    'High severity but non-life-threatening problems' ,
    'Life-threatening problems' ],

    Eye: ['Intermediate eye exam - new patient' ,
    'Comprehensive eye exam - new patient' ,
    'Intermediate eye exam - established patient' ,
    'Comprehensive eye exam - established patient' ,],
    
    Lab: ['Blood test: Electrolyte levels (sodium potassium, chloride, carbon dioxide)' ,  
    'Blood test: Lipids (cholesterol and triglycerides)' ,
    'Blood test: Kidney function' ,
    'Blood test: Acute hepatitis panel' ,
    'Blood test: Liver function' ,
    'Blood test: Albumin (protein) level' ,
    'Blood test: Alpha-fetoprotein (AFP) level, serum' ,
    'Blood test: Amylase (enzyme) level' ,
    'Blood test: Vitamin D-3 level' ,
    'Blood test: Calcium level' ,
    'Blood test: CEA level (carcinoembryonic antigen protein, a protein associated with certain kinds of cancers)' ,
    'Blood test: Chloride level' ,
    'Blood test: Cholesterol levels' ,
    'Blood test: Cortisol hormone level' ,
    'Blood test: Cardiac enzyme (creatine kinase) level' ,
    'Blood test: Blood creatinine level' ,
    'Blood test: Vitamin B-12 (cyanocobalamin) level' ,
    'Blood test: DHEA-S (dehydroepiandrosterone) level' ,
    'Blood test: Ferritin level' ,
    'Blood test: IgE (immune system protein) level' ,
    'Blood test: Blood glucose (sugar) level' ,
    'Blood test: Glutamyltransferase (liver enzyme) level' ,
    'Blood test: Blood glucose control (hemoglobin A1C)' ,
    'Blood test: Insulin level' ,
    'Blood test: Iron level' ,
    'Blood test: Iron binding capacity' ,
    'Blood test: Lactate dehydrogenase (enzyme) level' ,
    'Blood test: Lipase (fat enzyme) level' ,
    'Blood test: LDL cholesterol level' ,
    'Blood test: Magnesium level' ,
    'Blood test: Parathormone (parathyroid hormone) level' ,
    'Blood test: Phosphatase (enzyme) level' ,
    'Blood test: Phosphate level' ,
    'Blood test: Prolactin (milk producing hormone) level' ,
    'Blood test: PSA (prostate specific antigen) level' ,
    'Blood test: Total protein level' ,
    'Blood test: Serum (protein) level' ,
    'Blood test: Sodium level' ,
    'Blood test: Testosterone level (Free)' ,
    'Blood test: Testosterone level (Total or assay)' ,
    'Blood test: Thyroxine level (Total or assay)' ,
    'Blood test: Thyroxine level (Free)' ,
    'Blood test: TSH (thyroid stimulating hormone) level' ,
    'Blood test: SGOT (liver enzyme) level' ,
    'Blood test: SGPT (liver enzyme) level' ,
    'Blood test: Triglycerides level' ,
    'Blood test: Thyroid hormone - Evaluate T3 or T4' ,
    'Blood test: Thyroid hormone - T3 total or assay' ,
    'Blood test: Thyroid hormone - T3 free' ,
    'Blood test: Urea nitrogen level (to assess kidney functioning)' ,
    'Blood test: Uric acid level' ,
    'Blood test: Gonadotropin (reproductive hormone)' ,
    'Blood test: Complete blood cell count (red cells, white cells, platelets), automated test - Complete blood count' ,
    'Blood test: Complete blood cell count (red cells, white cells, platelets) - Hemoglobin' ,
    'Blood test: Clotting time' ,
    'Blood test: Red blood cell sedimentation rate (to detect inflammation)' ,
    'Blood test: Antibody to allergic substance (IgE)' ,
    'Blood test: Screen for autoimmune disorder' ,
    'Blood test: C-reactive protein (to detect infection or inflammation)' ,
    'Blood test: C-reactive protein (to detect infection or inflammation) - high sensitivity' ,
    'Blood test: Rheumatoid factor' ,
    'Blood test: Tuberculosis' ,
    'Blood test: Lyme disease bacteria (blood test)' ,
   'Blood test: Antibody to Herpes simplex virus (Type 1)' ,
    'Blood test: Antibody to Herpes simplex virus (Type 2)' ,
    'Blood test: Antibody to HIV-1 and HIV-2 virus' ,
    'Blood test: Hepatitis B surface antibody level' ,
    'Blood test: Antibody to varicella-zoster virus (chicken pox)' ,
    'Blood test: Thyroglobulin (thyroid protein) antibody level' ,
    'Blood test: Hepatitis C antibody level' ,
    'Blood test: Determine blood type (ABO)' ,
    'Blood test: Rh (D) antigen' ,
    'Swab Tests - Bacterial culture swab, other than urine, blood or stool' ,
    'Swab Tests - Bacterial culture for aerobic isolates' ,
    'Swab Tests - Test for disease-causing (pathogenic) organisms, not limited to a specific condition' ,
    'Swab Tests - Evaluation of antimicrobial drug (antibiotic, antifungal, antiviral)' ,
    'Swab Tests - Special stain for microorganism' ,
    'Blood test: Hepatitis B surface antigen' ,
    'Swab Tests - Influenza test (virus A or B)' ,
    'Swab Tests - Strep test (Streptococcus, group A)- Multiple-step method' ,
    'Swab Tests - Chlamydia test' ,
    'Swab Tests - Gonorrhea test (Neisseria gonorrhoeae bacteria)' ,
    'Swab Tests - Infectious agent detection of HPV, high risk types' ,
    'Swab Tests - Strep test (Streptococcus, group A) - With direct optical observation' ,
    'Pap test (pap smear) - manual screen' ,
    'Pap test (pap smear) - automated screen, manual rescreen' ,],

    Maternity: ['Vaginal delivery, including antepartum and postpartum care' ,
    'Cesarean delivery, including antepartum and postpartum care' ],
    
    Office: ['Visit New Patient - presenting with a problem (10 min)' ,
      'Visit New Patient - presenting with a problem (20 min)' ,
      'Visit New Patient - presenting with a problem (30 min)' ,
      'Visit New Patient - presenting with a problem (45 min)' ,
      'Visit New Patient - presenting with a problem (60 min)' ,
      'Visit Established Patient - presenting with a problem (5 min)' ,
      'Visit Established Patient - presenting with a problem (10 min)' ,
      'Visit Established Patient - presenting with a problem (15 min)' ,
      'Visit Established Patient - presenting with a problem (25 min)' ,
      'Visit Established Patient - presenting with a problem (40 min)' ,
      'Consultation (15 min)' ,
      'Consultation (30 min)' ,
      'Consultation (40 min)' ,
      'Consultation (60 min)' ,
      'Consultation (80 min)' ,
      'Preventive Care Visit - New Patient (Age 0-1)' ,
      'Preventive Care Visit - New Patient (Age 1-17)' ,
      'Preventive Care Visit - New Patient (Age 18-39)' ,
      'Preventive Care Visit - New Patient (Age 40-64)' ,
      'Preventive Care Visit - New Patient (Age 65+)' ,
      'Preventive Care Visit - Established Patient (Age 0-1)' ,
      'Preventive Care Visit - Established Patient (Age 1-4)' ,
      'Preventive Care Visit - Established Patient (Age 5-11)' ,
      'Preventive Care Visit - Established Patient (Age 12-17) ' ,
      'Preventive Care Visit - Established Patient (Age 18-39)' ,
      'Preventive Care Visit - Established Patient (Age 40-64)' ,
      'Preventive Care Visit - Established Patient (Age 65+)' ,],

    PhysicalTherapy: ['Physical Therapy - Evaluation',
    'Physical Therapy - re-evaluation' ,
    'Occupational Therapy - evaluation' ,
    'Occupational Therapy - re-evaluation' ,
    'Physical Therapy - Application of mechanical traction to 1 or more areas' ,
    'Physical Therapy - Application of blood vessel compression or decompression device to 1 or more areas' ,
    'Physical Therapy -Therapeutic exercise to develop strength, endurance, range of motion, and flexibility (15 min)' ,
    'Physical Therapy - Therapeutic procedure to re-educate brain-to-nerve-to-muscle function (15 min)' ,
    'Physical Therapy - Walking training to 1 or more areas (15 min)' ,
    'Physical Therapy - Therapeutic massage to 1 or more areas (15 min)' ,
    'Physical Therapy - Therapeutic procedures in a group setting' ,
    'Physical Therapy - Manual (physical) therapy techniques to 1 or more regions (15 min)' ,
    'Physical Therapy- Therapeutic activities to improve function, with one-on-one contact between patient and provider (15 min)' ,
    'Occupational Therapy - self-care or home management training (15 min)' ,
    'Occupational Therapy - Physical performance test or measurement with report (15 min)' ,
    'Occupational Therapy - Orthotic management of arm or leg and/or trunk (15 min)' ,
    'Occupational Therapy - evaluation of orthotic or prosthetic use (15 min)' ,],

    Radiology: ['Magnetic Resonance Imaging (MRI) Jaw' ,
    'CT Scan Head or brain - without contrast' ,
    'CT Scan Head or brain - with contrast' ,
    'CT Scan Head or brain - without contrast, followed by with contrast' ,
    'CT Scan ear or eye - without contrast' ,
    'CT Scan ear or eye - with contrast' ,
    'CT Scan face - without contrast' ,
    'CT Scan face - with contrast' ,
    'CT Scan neck (soft tissue) - without contrast' ,
    'CT Scan neck (soft tissue) - with contrast' ,
    'CT Angiography Head - with contrast' ,
    'CT Angiography Neck - with contrast' ,
    'Magnetic Resonance Imaging (MRI) Eye, face, or neck - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Eye, face, or neck - without contrast, followed by with contrast' ,
    'Magnetic Resonance Angiography (MRA) Head - without contrast' ,
    'Magnetic Resonance Angiography (MRA) Head - without contrast, followed by with contrast' ,
    'Magnetic Resonance Angiography (MRA) Neck - without contrast' ,
    'Magnetic Resonance Angiography (MRA) Neck - with contrast' ,
    'Magnetic Resonance Angiography (MRA) Neck - without contrast, followed by with contrast' ,
    'Magnetic Resonance Imaging (MRI) Brain - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Brain - without contrast, followed by with contrast' ,
    'X-ray - Chest' ,
    'CT Scan chest - without contrast' ,
    'CT Scan chest - with contrast' ,
    'CT Scan chest - without contrast, followed by with contrast' ,
    'CT Angiography Chest (not heart) - with contrast' ,
    'Magnetic Resonance Imaging (MRI) Chest - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Chest - without contrast, followed by with contrast' ,
    'Magnetic Resonance Angiography (MRA) Chest (not heart)' ,
    'X-ray - entire spine' ,
    'X-ray - lower spine' ,
    'CT Scan upper spine (neck) - without contrast' ,
    'CT Scan mid spine - without contrast' ,
    'CT Scan lower spine - without contrast' ,
    'CT Scan lower spine - with contrast' ,
    'Magnetic Resonance Imaging (MRI) Upper spine (neck) - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Mid spine - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Lower Spine - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Upper spine (neck) - without contrast, followed by with contrast' ,
    'Magnetic Resonance Imaging (MRI) Mid spine - without contrast, followed by with contrast' ,
    'Magnetic Resonance Imaging (MRI) Lower Spine - without contrast, followed by with contrast' ,
    'CT Scan pelvis - without contrast' ,
    'CT Scan pelvis - with contrast' ,
    'Magnetic Resonance Imaging (MRI) Pelvis - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Pelvis - without contrast, followed by with contrast' ,
    'Magnetic Resonance Angiography (MRA) Pelvis' ,
    'X-ray - Shoulder' ,
    'X-ray - Wrist' ,
    'X-ray - hand' ,
    'CT Scan arm - without contrast' ,
    'CT Scan arm - with contrast' ,
    'Magnetic Resonance Imaging (MRI) Arm (non-joint) - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Arm (non-joint) - without contrast, followed by with contrast' ,
    'Magnetic Resonance Imaging (MRI) Arm (joint) - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Arm (joint) - with contrast' ,
    'Magnetic Resonance Imaging (MRI) Arm (joint) - without contrast, followed by with contrast' ,
    'X-ray - Knee' ,
    'X-ray - ankle' ,
    'X-ray - Foot (2 views)' ,
    'X-ray - foor (3 or more views)' ,
    'CT Scan leg - without contrast' ,
    'CT Scan leg - with contrast' ,
    'Magnetic Resonance Imaging (MRI) Leg (non-joint) - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Leg (non-joint) - without contrast, followed by with contrast' ,
    'Magnetic Resonance Imaging (MRI) Leg (joint) - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Leg (joint) - with contrast' ,
    'Magnetic Resonance Imaging (MRI) Leg (joint) - without contrast, followed by with contrast' ,
    'Magnetic Resonance Angiography (MRA) Leg' ,
    'CT Scan abdomen - without contrast' ,
    'CT Scan abdomen - with contrast' ,
    'CT Scan abdomen - without contrast, followed by with contrast' ,
    'CT Angiography abdomen and pelvis - with contrast' ,
    'CT Angiography abdomen' ,
    'CT Scan abdomen and pelvis - without contrast' ,
    'CT Scan abdomen and pelvis - with contrast' ,
    'CT Scan abdomen and pelvis - without contrast, followed by with contrast' ,
    'Magnetic Resonance Imaging (MRI) Abdomen - without contrast' ,
    'Magnetic Resonance Imaging (MRI) Abdomen - without contrast, followed by with contrast' ,
    'Magnetic Resonance Imaging (MRI) Abdomen and pelvis (enterography) - without contrast, followed by with contrast' ,
    'Magnetic Resonance Angiography (MRA) Abdomen' ,
    'CT Angiography Heart - with contrast' ,
    'CT Scan limited and localized follow-up study' ,
    'Ultrasound - Breast' ,
    'Ultrasound - Abdomen' ,
    'Ultrasound - Abdomen (limited area)' ,
    'Ultrasound - Pregnant uterus' ,
    'Ultrasound - Transvaginal' ,
    'Ultrasound - Pelvic (nonobstetric)' ,
    'Mammography analog - single breast' ,
    'Mammography analog - both breasts' ,
    'Mammography analog screening - both breasts' ,
    'Magnetic Resonance Imaging (MRI) Breast - Bilateral' ,
    'Bone Density Scan (DEXA)' ,
    'Nuclear Medicine - Thyroid uptake and scan' ,
    'Nuclear Medicine - Thyroid cancer metastases imaging (whole body)' ,
    'Nuclear Medicine - Parathyroid planar imaging' ,
    'Nuclear Medicine - Hepatobiliary system imaging' ,
    'Nuclear Medicine - Hepatobiliary system imaging, with pharmacologic intervention' ,
    'Nuclear Medicine - Gastric emptying imaging study' ,
    'Nuclear Medicine - Whole body bone scan' ,
    'Nuclear Medicine - 3-phase bone scan' ,
    'Nuclear Medicine - SPECT bone scan' ,
    'Nuclear Medicine - MUGA scan' ,
    'Nuclear Medicine - Renal scan without drug' ,
    'Nuclear Medicine - Renal scan with drug' ,
    'PET/CT Scan - limited area' ,
    'PET/CT Scan - base of skull to mid thigh' ,
    'PET/CT Scan - whole body' ,
    'Mammography diagnostic - one breasts' ,
    'Digital Mammography - Both Breasts' ,
    'Mammography diagnostic - both breasts' ,],
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setProcedure('');
    setSearchText('');
    setAutocompleteVisible(false);
  };

  const handleProcedureChange = (value) => {
    setProcedure(value);
    setSearchText(value);
    setAutocompleteVisible(false);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredProcedures = procedureData[category].filter((procedureOption) =>
      procedureOption.toLowerCase().includes(text.toLowerCase())
    );

    setProcedure(''); // Clear selected procedure when searching
    setFilteredProcedures(filteredProcedures);
    setAutocompleteVisible(true); // Open the autocomplete dropdown
  };

  const selectProcedure = (item) => {
    handleProcedureChange(item);
  };

  const navigation = useNavigation();

  const handleNext = () => {
    if (procedure) {
      // Navigate to the CostInfoScreen and pass the procedure
      navigation.navigate('ZipCodeInput', { category, procedure } );
    }
  };

  return (
      <View style={{ padding: 20, marginBottom: 40, position: "relative" }}>

      <View style={styles.row}>
 
        <Autocomplete
          data={filteredProcedures}
          defaultValue={searchText}
          style={styles.search}
          inputContainerStyle={styles.autocomplete}
          placeholder='Search for Shoppable Services'
          onChangeText={handleSearch}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectProcedure(item)}>
              <Text style={{ padding: 10 }}>{item}</Text>
            </TouchableOpacity>
          )}
        />

    {autocompleteVisible && (
          <FlatList
            data={filteredProcedures}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectProcedure(item)}>
                <Text style={{ paddingBottom: 20 }}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={{ zIndex: 9999 }}
          />
        )}
        <TouchableOpacity onPress={handleNext}>
        <Image source={require('../assets/medicalc-logo.png')} style={styles.img}/>
            </TouchableOpacity>
        </View>
        <View style={{alignItems: "center"}}>
        <Text style={styles.text}>Please search or add the hospital service you need and press the logo to go next</Text>
        </View>
        
        <Picker
          selectedValue={category}
          onValueChange={handleCategoryChange}
          style={{ marginBottom: -60, marginTop: -60}}
        >
          <Picker.Item label="Ambulance and Transportation Services" value="Ambulance" />
          <Picker.Item label="Behavioral Health" value="Behavioral" />
          <Picker.Item label="Colonoscopy and Endoscopy" value="Colonoscopies" />
          <Picker.Item label="Emergency Department Visits" value="Emergency" />
          <Picker.Item label="Eye Exams" value="Eye" />
          <Picker.Item label="Laboratory and Pathology" value="Lab" />
          <Picker.Item label="Maternity" value="Maternity" />
          <Picker.Item label="Office Visits" value="Office" />
          <Picker.Item label="Physical and Occupational Therapy" value="PhysicalTherapy" />
          <Picker.Item label="Radiology" value="Radiology" />
        </Picker>
        <Text style={styles.line}>-----------------------------------------</Text>
        <Picker
          selectedValue={procedure}
          onValueChange={handleProcedureChange}
        >
          {procedureData[category].map((procedureOption) => (
            <Picker.Item key={procedureOption} label={procedureOption} value={procedureOption} />
          ))}
        </Picker>

        {category && procedure && (
          <View style={{ marginTop: 5}}>
            <Text><Text style={{ fontWeight: 'bold' }}>Chosen Category: </Text>{category}</Text>
            <Text><Text style={{ fontWeight: 'bold', marginTop: 10 }}>Chosen Procedure: </Text>{procedure}</Text>
          </View>
        )}
          </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  img: {
    height: 80,
    width: 80
  },
  text: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 60,
    width: "75%"
  },
  search: {
    backgroundColor: "#DFDFDF",
    borderRadius: 10,
    height: 55,
    width: 290,
    marginTop: 10,
    paddingLeft: 15
  },
  autocomplete: {
    borderWidth: 0,
  },
  line: {
    marginTop: 60,
    marginBottom: 10
  }
})

export default HospitalServicePage;
