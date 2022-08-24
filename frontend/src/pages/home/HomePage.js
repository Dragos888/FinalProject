import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/SideBar';
import './Home.css';
export default function HomePage() {
  return (
    <>
      <Header />
      <div className="homepage">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
