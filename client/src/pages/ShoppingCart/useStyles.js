import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1160px",
    margin: "0 auto",
    flexDirection: "column",
    paddingTop: "20px",
    paddingBottom: "40px",
  },
  box: {
    display: "flex",
    gap: "35px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  boxContainer: {
    paddingBottom: "18px",
  },
  deleteButton: {
    marginRight: theme.spacing(1),
  },
  summary: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    background: "#F5F7FF",
    width: "65.66%",
    padding: "18px 35px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  subtitle: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "210%",
    color: "#000000",
  },
  image: {
    width: "80px",
    marginRight: theme.spacing(2),
  },
  quantityInput: {
    width: "70px",
    background: "#F5F7FF",
    border: "none",
    padding: 0,
    borderRadius: "6px",
    [theme.breakpoints.down("sm")]: {
      width: "56px",
      height: "42.4px",
    },
  },
  notchedOutline: {
    border: "none",
  },
  checkoutButton: {
    marginTop: theme.spacing(2),
    height: "50px",
    background: "#0156FF",
    borderRadius: "50px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      height: "37px",
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
  btnButton: {
    marginTop: theme.spacing(4),
    width: "200px",
    height: "37px",
    background: "#000000",
    borderRadius: "50px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 61px",
      width: "308px",
      height: "38px",
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
  clearContBtnBox: {
    display: "flex",
    gap: "7px",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "0",
    },
  },
  continueButton: {
    border: "2px solid #A2A6B0",
    background: "none",
    color: "#A2A6B0",
  },
  desktopTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 32,
    lineHeight: "1.37",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  tabletTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  desktopSummaryTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  tabletSummaryTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.between("sm", "md")]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default useStyles;
