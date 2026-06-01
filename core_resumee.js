.coreBox{
  position:fixed;
  background:rgba(0,0,0,0.45);
  padding:10px 14px;
  border-radius:10px;
  font-family:monospace;
  color:#fff;
  z-index:99999;
}

#maskWelt{ bottom:20px; left:20px; }
#maskScanner{ top:20px; left:50%; transform:translateX(-50%); display:flex; gap:14px; }
#epochenHUD{ top:20px; right:20px; }
#coreNav{ bottom:20px; left:50%; transform:translateX(-50%); }
#coreRes{ bottom:70px; left:50%; transform:translateX(-50%); }
#NAVI{ bottom:20px; right:20px; }

.pulse{
  margin-top:6px;
  width:14px; height:14px;
  border:1px solid #fff;
  border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  font-size:10px;
  transition:transform .12s linear;
}
