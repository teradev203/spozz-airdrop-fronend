import {
  Paper,
  Button,
  Box,
  Grid,
  FormControl,
  OutlinedInput,
  InputLabel,
  Typography,
  MenuItem,
  Dialog,
  LinearProgress,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  InputAdornment,
  Zoom, Container,
} from "@material-ui/core";

import SwapVertIcon from "@material-ui/icons/SwapVert";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import InfoTooltipMulti from "../../components/InfoTooltip/InfoTooltipMulti";
import TabPanel from "../../components/TabPanel";
import CardHeader from "../../components/CardHeader/CardHeader";
import CustomInput from "../../components/CustomInput/CustomInput";
import { NavLink } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from "react";
import { switchNetwork, initializeNetwork } from "../../slices/NetworkSlice";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@material-ui/lab";

import { useWeb3Context } from "../../hooks/web3Context";
import { useAppSelector } from "src/hooks";
import { error, info } from "../../slices/MessagesSlice";
import { loadAccountDetails } from "../../slices/AccountSlice";
import { airdropSpozz } from "../../slices/AirdropThunk";
import { isPendingTxn, txnButtonText } from "src/slices/PendingTxnsSlice";

export default function Admin() {

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={12} lg={12} >
          <Grid container spacing={2}>
            <Grid item xs={0} sm={0} md={1} lg={3} />
            <Grid item xs={12} sm={12} md={10} lg={6}>
              <div className="title-small">
                {"Presale & Airdropfor"}
              </div>
              <div />
              <div className="title-medium">
                SPOZZ TOKEN
              </div>
              <hr />
              {/* <div className="title-big">
              Airdrop Amount
            </div> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} lg={12} >
          <Grid container spacing={2}>
            <Grid item xs={0} sm={0} md={1} lg={3} />
            <Grid item xs={12} sm={12} md={10} lg={6}>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <p>Send Amount</p>
                </div>
                <FormControl variant="outlined" color="primary" fullWidth>
                  <OutlinedInput
                    id="slippage"
                    multiline="2"
                    readOnly
                    value={"word"}
                  />
                </FormControl>
                <Button >asdfsadf</Button>
              </div>


            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}