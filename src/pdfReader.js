import React, { useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.worker.min.js';

const PdfReader = ({ onExtractDetails }) => {
  const [profileData, setProfileData] = useState({
    profile: "",
    experience: [],
    education: [],
    skills: [],
  });

  const extractTextFromPDF = async (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async () => {
      try {
        const typedArray = new Uint8Array(fileReader.result);
        const pdf = await getDocument({ data: typedArray }).promise;
        let text = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const strings = content.items.map(item => item.str);
          text += strings.join(' ');
        }
        console.log('Extracted Text:', text);
        
        // Improved regex and extraction logic
        const profileMatch = text.match(/Profile([\s\S]*?)(?=Experience|Education|Skills|Contact|$)/);
        const experienceMatches = text.match(/Experience([\s\S]*?)(?=Education|Skills|Contact|$)/);
        const educationMatches = text.match(/Education([\s\S]*?)(?=Skills|Contact|$)/);
        const skillsMatches = text.match(/Skills([\s\S]*?)(?=Contact|$)/);

        const profile = profileMatch ? profileMatch[1].trim() : "";
        const experience = experienceMatches ? experienceMatches[1].trim().split(/•\s*/).filter(Boolean) : [];
        const education = educationMatches ? educationMatches[1].trim().split(/•\s*/).filter(Boolean) : [];
        const skills = skillsMatches ? skillsMatches[1].trim().split(/•\s*/).filter(Boolean) : [];

        const extractedData = {
          profile,
          experience,
          education,
          skills,
        };

        console.log('Extracted Data:', extractedData);
        setProfileData(extractedData);
        onExtractDetails(extractedData);
      } catch (error) {
        console.error('Error extracting text from PDF:', error);
      }
    };
    fileReader.readAsArrayBuffer(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      extractTextFromPDF(file);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <div>
        <h2>Extracted LinkedIn Data:</h2>
        <pre>{JSON.stringify(profileData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PdfReader;
