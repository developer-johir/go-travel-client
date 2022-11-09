import React from 'react';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-slate-800 py-5'>

<footer className="max-w-screen-xl mx-auto footer p-10 bg-slate-800 text-white border-b-2 border-red-500">
  <div>
    <img className='w-20 h-20' src={logo} alt="" />
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>

            <div className='pt-4'>
            <p className='text-center text-white'>Copyright 2022 <span className='text-red-600 font-semibold'>Go-Travel</span> | Design By <span className='text-red-600 font-semibold'>Jahirul Islam</span></p>
            </div>
        </div>
    );
};

export default Footer;