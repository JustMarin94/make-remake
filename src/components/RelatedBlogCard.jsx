import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const truncateText = (text, maxLength) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
};

export default function RelatedBlogCard({
  title,
  imageSource,
  slugURL,
  bodyText,
  createdAt,
  authorName,
  authorImage,
}) {
  const truncatedTitle = truncateText(title, 75);
  const truncatedBody = truncateText(bodyText, 100);

  return (
    <Card
      sx={{
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
        <Avatar src={authorImage} alt={authorName} />
        <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
          {authorName}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 60%" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontSize: "18px" }}
          >
            {truncatedTitle}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "14px" }}
          >
            {truncatedBody}
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ width: "40%", height: "auto" }}
          image={
            imageSource || "/static/images/cards/contemplative-reptile.jpg"
          }
          title={truncatedTitle}
        />
      </Box>
      <CardActions>
        <Button component={Link} to={`/${slugURL}`} size="small">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
