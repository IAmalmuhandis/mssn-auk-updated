import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

import QRCode from 'qrcode'
import html2pdf from "html2pdf.js";
import jsPDF from 'jspdf'

import Navbar from "../navbar/Navbar";
import aukLogo from "./../../assets/auk-logo.png";
import mssnLogo from "./../../assets/mssn-auk.png";

import './Reciept.css'

const Reciept = () => {
  const [qrCode, setQrCode] = useState('')
  const contentRef = useRef();


  const generateQR = async text => {
    try {
      const qr = await QRCode.toDataURL(text)
      setQrCode(qr)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    generateQR(`Welcome to MSSN Portal Make Payment and Verify your Registration`)
  }, [])
  
  const downloadPdf = () => {
    const content = contentRef.current;

    // Configuration for html2pdf
    const options = {
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 2 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(content).set(options).save();
  };

  return (
    <div className="reciept">
      <Navbar />
      <Box width='100%' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Paper elevation={4} sx={{width: 595}}>
          <Box ref={contentRef} width='100%' sx={{ mt: 5, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div className="header" style={{position: 'relative', paddingTop: 110, width: '100%'}}>
            <Typography variant="h6" align="center" fontWeight='bold' >
              MSSN Payment Reciept
            </Typography>
            <img style={{position: 'absolute', width: 100, right: 25, top: -10}}  src={mssnLogo} alt="mssnLogo" />
          </div>
          <hr style={{ width: '70%' }} />
          
            <img src={aukLogo} style={{position: 'absolute', top: 200, left: 70, opacity: .2}} alt="auk-logo" width={200} />
            <img src={mssnLogo} style={{position: 'absolute',  bottom: 200, right: 70, opacity: .2}} alt="auk-logo" width={200} />
          <div className="details" style={{ width: '70%' }}>
            <div className="info name">
              <p className="key">Name:</p>
              <p className="value">Musaiyib Yakubu Usman</p>
            </div>
            <div className="info regNo">
              <p className="key">Registration Number:</p>
              <p className="value">018/019/019/019/019</p>
            </div>
            <div className="info department">
              <p className="key">Department:</p>
              <p className="value">Computer Science</p>
            </div>
            <div className="info level">
              <p className="key">Level:</p>
              <p className="value">400</p>
            </div>
            <div className="info phone">
              <p className="key">Phone:</p>
              <p className="value">0912 123 456</p>
            </div>
            <div className="info refNo">
              <p className="key">Reference Number:</p>
              <p className="value">018/019/019/019/019</p>
            </div>
            <div className="info date">
              <p className="key">Date:</p>
              <p className="value">10 Oct 2021</p>
            </div>
          </div>

          <div className="qrcode" style={{marginTop: 70}}>
            <img src={qrCode} width={150} alt="qrcode" />
          </div>
            
        </Box>
        </Paper>
        <Button onClick={downloadPdf}>Download as pdf</Button>
      </Box>
    </div>
  );
};

export default Reciept;
