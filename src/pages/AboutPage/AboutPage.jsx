import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Container sx={{display: "flex"}} >
        <Grid container spacing={1} className={"about_page"}>
            <Grid item xs={12} md={4} className="a_title_container"  >
                <h2 className="a_title">ABOUT US</h2>
                <p className="a_title_span">A</p>
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography variant="body2" color="initial" className="a_paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias libero earum laborum corrupti labore dicta neque doloribus similique? Qui, quae. Quam enim minus fuga tempore ullam, illum consectetur unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae vero fugit perspiciatis laboriosam eveniet odio! Consequuntur labore delectus temporibus, veritatis sit non velit esse maxime, minima voluptatem accusantium culpa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis harum nam pariatur earum consectetur eius sequi eaque, velit vitae est libero itaque sint eveniet nemo aut illum fuga veritatis quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis itaque quas ducimus sunt voluptates voluptate architecto. Distinctio omnis aperiam maxime, blanditiis magnam numquam voluptatem esse excepturi amet officiis doloremque!
                </Typography>
            </Grid>
        </Grid>
    </Container>
  );
};

export default AboutPage;
