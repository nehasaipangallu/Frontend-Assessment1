import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
// import { ThemeContext } from '../../themeprovider/ThemeProvider';
// import  { useContext } from "react";
// import theme from '../../theme' ;

// const getStyles = (mode) => ({
//   app: {
//     backgroundColor: theme[mode].backgroundColor
//   },
//   text: {
//     color: theme[mode].color
//   },
//   theme: {
//     color: theme[mode].highlight
//   }
// });


export default function ReviewCard() {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  // const { mode } = useContext(ThemeContext);
  // const styles = getStyles(mode);

  return (
    <div>
      <Row>
        <Col>
          <Card className="card-style"
          sx={{
            maxWidth: 345,
           
          }}>
            <CardHeader

              avatar={

                <Avatar alt="Remy Sharp" src="/assets/images/avtar1.png" />
              }

              action={
                <IconButton aria-label="settings" >
                 

                 <Dropdown>
                 <Dropdown.Toggle className="dropdown-btn">
                  <MoreVertIcon className="Icon-btn" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
                  </Dropdown>
                 
                </IconButton>
              }

              title="Ronald Richards"
              subheader="ronaldrichards@gmail.com"
            />

            <CardContent>
              <Typography variant="body2" >
                Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id quam pharetra. Massa vitae feugiat vulputate et praesent nisl neque
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions> */}

          </Card>
        </Col>
        <Col>
          <Card className="card-style"
          sx={{
            maxWidth: 345,
           
          }}>
            <CardHeader

              avatar={

                <Avatar alt="Remy Sharp" src="/assets/images/avtar1.png" />
              }

              action={
                <IconButton aria-label="settings" >
                 

                 <Dropdown>
                 <Dropdown.Toggle className="dropdown-btn">
                  <MoreVertIcon className="Icon-btn" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
                  </Dropdown>
                 
                </IconButton>
              }

              title="Ronald Richards"
              subheader="ronaldrichards@gmail.com"
            />

            <CardContent>
              <Typography variant="body2" >
                Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id quam pharetra. Massa vitae feugiat vulputate et praesent nisl neque
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions> */}

          </Card>
        </Col>
        <Col>
          <Card className="card-style"
          sx={{
            maxWidth: 345,
           
          }}>
            <CardHeader

              avatar={

                <Avatar alt="Remy Sharp" src="/assets/images/avtar1.png" />
              }

              action={
                <IconButton aria-label="settings" >
                 

                 <Dropdown>
                 <Dropdown.Toggle className="dropdown-btn">
                  <MoreVertIcon className="Icon-btn" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
                  </Dropdown>
                 
                </IconButton>
              }

              title="Ronald Richards"
              subheader="ronaldrichards@gmail.com"
            />

            <CardContent>
              <Typography variant="body2" >
                Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id quam pharetra. Massa vitae feugiat vulputate et praesent nisl neque
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions> */}

          </Card>
        </Col>
        <Col>
          <Card className="card-style"
          sx={{
            maxWidth: 345,
           
          }}>
            <CardHeader

              avatar={

                <Avatar alt="Remy Sharp" src="/assets/images/avtar1.png" />
              }

              action={
                <IconButton aria-label="settings" >
                 

                 <Dropdown>
                 <Dropdown.Toggle className="dropdown-btn">
                  <MoreVertIcon className="Icon-btn" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
                  </Dropdown>
                 
                </IconButton>
              }

              title="Ronald Richards"
              subheader="ronaldrichards@gmail.com"
            />

            <CardContent>
              <Typography variant="body2" >
                Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id quam pharetra. Massa vitae feugiat vulputate et praesent nisl neque
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions> */}

          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
      <Col>
          <Card className="card-style"
          sx={{
            maxWidth: 345,
           
          }}>
            <CardHeader

              avatar={

                <Avatar alt="Remy Sharp" src="/assets/images/avtar1.png" />
              }

              action={
                <IconButton aria-label="settings" >
                 

                 <Dropdown>
                 <Dropdown.Toggle className="dropdown-btn">
                  <MoreVertIcon className="Icon-btn" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
                  </Dropdown>
                 
                </IconButton>
              }

              title="Ronald Richards"
              subheader="ronaldrichards@gmail.com"
            />

            <CardContent>
              <Typography variant="body2" >
                Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id quam pharetra. Massa vitae feugiat vulputate et praesent nisl neque
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions> */}

          </Card>
        </Col>
        <Col>
          <Card className="card-style"
          sx={{
            maxWidth: 345,
           
          }}>
            <CardHeader

              avatar={

                <Avatar alt="Remy Sharp" src="/assets/images/avtar1.png" />
              }

              action={
                <IconButton aria-label="settings" >
                 

                 <Dropdown>
                 <Dropdown.Toggle className="dropdown-btn">
                  <MoreVertIcon className="Icon-btn" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
                  </Dropdown>
                 
                </IconButton>
              }

              title="Ronald Richards"
              subheader="ronaldrichards@gmail.com"
            />

            <CardContent>
              <Typography variant="body2" >
                Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id quam pharetra. Massa vitae feugiat vulputate et praesent nisl neque
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions> */}

          </Card>
        </Col>
        <Col>
          <Card className="card-style"
          sx={{
            maxWidth: 345,
           
          }}>
            <CardHeader

              avatar={

                <Avatar alt="Remy Sharp" src="/assets/images/avtar1.png" />
              }

              action={
                <IconButton aria-label="settings" >
                 

                 <Dropdown>
                 <Dropdown.Toggle className="dropdown-btn">
                  <MoreVertIcon className="Icon-btn" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
                  </Dropdown>
                 
                </IconButton>
              }

              title="Ronald Richards"
              subheader="ronaldrichards@gmail.com"
            />

            <CardContent>
              <Typography variant="body2" >
                Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id quam pharetra. Massa vitae feugiat vulputate et praesent nisl neque
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions> */}

          </Card>
        </Col>
        <Col>
          <Card className="card-style"
          sx={{
            maxWidth: 345,
           
          }}>
            <CardHeader

              avatar={

                <Avatar alt="Remy Sharp" src="/assets/images/avtar1.png" />
              }

              action={
                <IconButton aria-label="settings" >
                 

                 <Dropdown>
                 <Dropdown.Toggle className="dropdown-btn">
                  <MoreVertIcon className="Icon-btn" />
                  </Dropdown.Toggle >

                  <Dropdown.Menu>
        <Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Delete Profile</Dropdown.Item>
      </Dropdown.Menu>
                  </Dropdown>
                 
                </IconButton>
              }

              title="Ronald Richards"
              subheader="ronaldrichards@gmail.com"
            />

            <CardContent>
              <Typography variant="body2" >
                Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id quam pharetra. Massa vitae feugiat vulputate et praesent nisl neque
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions> */}

          </Card>
        </Col>
      </Row>
    </div>


  );
}