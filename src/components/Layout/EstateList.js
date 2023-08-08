import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { HouseData } from './houselist-data';

export default function EstateList() {
  return (
    <div className='grid lg:grid-cols-3 gap-10'>
      {
     HouseData.map((items) => {
      return(
        <Card sx={{ minHeight: '280px', width: 320 }}>
        <CardCover>
          <img
           key={items.state}
            src={items.src}
            srcSet={items.srcset}
            loading="lazy"
            alt={items.state}
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Typography level="title-lg" textColor="#fff" mb={1}>
           {items.location}
          </Typography>
          <Typography
            startDecorator={<LocationOnRoundedIcon />}
            textColor="neutral.300"
          >
            {items.state}
          </Typography>
        </CardContent>
      </Card>
      )
     })

      }
    </div>
   
  );
}