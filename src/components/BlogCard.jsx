import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const truncateText = (text, maxLength) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
};

export default function BlogCard({
  title,
  imageSource,
  slugURL,
  bodyText,
  createdAt,
}) {
  const truncatedTitle = truncateText(title, 75);
  const truncatedBody = truncateText(bodyText, 200);

  return (
    <Card
      sx={{
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={imageSource || "/static/images/cards/contemplative-reptile.jpg"}
        title={truncatedTitle}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "30px" }}
        >
          {truncatedTitle}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "16px" }}
        >
          {truncatedBody}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{ marginLeft: "12px" }}
        >
          Date created: {createdAt}
        </Typography>
        <Button component={Link} to={`/${slugURL}`} size="small">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
