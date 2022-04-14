import React from 'react';
import './SearchPage.css';
import UseGoogleSearch from './UseGoogleSearch';
import { useStateValue } from '../googlecontext/StateProvider';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = UseGoogleSearch(term);

  console.log(data);
  return (

    <div className='search_page'>
      <div className='search_header'>
        <Link to='/'>
          <img className='searchPage_logo' src='https://1000logos.net/wp-content/uploads/2016/11/google-logo.jpg' />
        </Link>
        <div className='search_header_body'>
          <Search hideButtons/>
          <div className='searchPage_options'>
            <div className='searchPage_optionsLeft'>
             <div className='searchPage_option'>
               <SearchIcon/>
               <Link to='/all'>All</Link>
             </div>
             <div className='searchPage_option'>
               <DescriptionIcon/>
               <Link to='/news'>News</Link>
             </div>
             <div className='searchPage_option'>
               <ImageIcon/>
               <Link to='/images'>Images</Link>
             </div>
             <div className='searchPage_option'>
               <LocalOfferIcon/>
               <Link to='/shopping'>Shopping</Link>
             </div>
             <div className='searchPage_option'>
               <RoomIcon/>
               <Link to='/maps'>Maps</Link>
             </div>
             <div className='searchPage_option'>
               <MoreVertIcon/>
               <Link to='/more'>more</Link>
             </div>
            </div>
            <div className='searchPage_optionsRight'>
            <div className='searchPage_option'>
               
               <Link to='/settings'>Settings</Link>
             </div>
             <div className='searchPage_option'>
               
               <Link to='/tools'>Tools</Link>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className='search_results'>

      </div>
    </div>
  )
}

export default SearchPage

// https://developers.google.com/custom-search/v1/using_rest

// https://cse.google.com/cse/create/new