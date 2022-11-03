// import React from 'react';
// import {
//   makeStyles,
//   Container,
//   Grid,
//   Box,
//   Typography,
//   IconButton,
//   Avatar,
// } from '@material-ui/core/styles';
// import {
//   RoomIcon,
//   Phone,
//   Email,
//   WebAsset,
//   Facebook,
//   Twitter,
//   LinkedIn,
// } from '@material-ui/icons/Room';

// const useStyles = makeStyles((theme: any) => ({
//   iconWrapper: {
//     backgroundColor: theme.palette.background.emphasis,
//   },
//   midColumn: {
//     [theme.breakpoints.up('md')]: {
//       paddingLeft: theme.spacing(4),
//     },
//   },
// }));

// export default function Footer() {
//   const classes = useStyles();

//   const content = {
//     header: 'Lorem ipsum dolor sit amet',
//     description:
//       'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.',
//     contact1: 'Address',
//     'contact1-desc1': '1652 Cordia Cir',
//     'contact1-desc2': ' Newton, North Carolina(NC), 28658',
//     contact2: 'Email',
//     'contact2-desc': 'hello@mui.dev',
//     contact3: 'Social Media',
//     contact4: 'Phone',
//     'contact4-desc': '(318) 285-9856',
//   };

//   return (
//     <section>
//       <Container maxWidth="lg">
//         <Box py={10}>
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={4}>
//               <Typography variant="h6" component="h2" gutterBottom>
//                 {content.header}
//               </Typography>
//               <Typography variant="subtitle1" color="textSecondary" paragraph>
//                 {content.description}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <div className={classes.midColumn}>
//                 <Box display="flex" mb={3}>
//                   <div>
//                     <Avatar className={classes.iconWrapper}>
//                       <RoomIcon color="primary" fontSize="small" />
//                     </Avatar>
//                   </div>
//                   <Box ml={2}>
//                     <Typography variant="h6" gutterBottom>
//                       {content.contact1}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {content['contact1-desc1']}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {content['contact1-desc2']}
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <Box display="flex">
//                   <div>
//                     <Avatar className={classes.iconWrapper}>
//                       <EmailIcon color="primary" fontSize="small" />
//                     </Avatar>
//                   </div>
//                   <Box ml={2}>
//                     <Typography variant="h6" gutterBottom>
//                       {content.contact2}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {content['contact2-desc']}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </div>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Box display="flex" mb={3}>
//                 <div>
//                   <Avatar className={classes.iconWrapper}>
//                     <WebAssetIcon color="primary" fontSize="small" />
//                   </Avatar>
//                 </div>
//                 <Box ml={2}>
//                   <Typography variant="h6" gutterBottom>
//                     {content.contact3}
//                   </Typography>
//                   <IconButton href="#" color="inherit">
//                     <FacebookIcon />
//                   </IconButton>
//                   <IconButton href="#" color="inherit">
//                     <TwitterIcon />
//                   </IconButton>
//                   <IconButton href="#" color="inherit">
//                     <LinkedInIcon />
//                   </IconButton>
//                 </Box>
//               </Box>
//               <Box display="flex">
//                 <div>
//                   <Avatar className={classes.iconWrapper}>
//                     <PhoneIcon color="primary" fontSize="small" />
//                   </Avatar>
//                 </div>
//                 <Box ml={2}>
//                   <Typography variant="h6" gutterBottom>
//                     {content.contact4}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {content['contact4-desc']}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </section>
//   );
// }
// import React from 'react';

const Footer = () => <div>Footer</div>;

export default Footer;
