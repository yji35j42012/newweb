<?php
//0727 ice. v2
// $url = "https://api.iabc365.com/app/control_API/agents/api_doaction.php";
// $url = "http://agti566.cvssp2017.com/app/control_API/agents/api_doaction.php";
// $url = "http://agiiti566.cvssp2017.com/app/control_API/agents/api_doaction.php";

$domain =  $_SERVER['SERVER_NAME'];
$phpVer = PHP_VERSION;

foreach ($_REQUEST as $key => $value) {
    if(is_array($value))   {
      foreach($value as $mkey => $mval){
        $value[$mkey] = $mval;
      }
      try{
        $$key = $value;
      }catch(Exception $e){
        $$key = "";
      }
    }else{
      try{
        $$key = $value;
      }catch(Exception $e){
        $$key = "";
      }
    }
}

if(preg_match("/ctliiti566/",$domain)){
    $url = "http://agiiti566.cvssp2017.com/app/control_API/agents/api_doaction.php";
}else if(preg_match("/ctlti566php7/",$domain) || preg_match("/ctlti566/",$domain)){
    $url = "http://agti566php7.cvssp2017.com/app/control_API/agents/api_doaction.php";
}else if(preg_match("/205.201.14.45/",$domain)){
    $url = "http://aguat.iabc365.com/app/control_API/agents/api_doaction.php";
}else{
    $url = "http://ag.iabc365.com/app/control_API/agents/api_doaction.php";
}


//此為參考範例帳號與key，請改為提供給您的資料做測試
if(empty($AGID))$AGID = "56";
if(empty($AGName))$AGName= "cit001";
if(empty($AGPassword))$AGPassword="cit001123";
if(empty($secretKey))$secretKey = "Se6W8FZPkrMCOIBS";
if(empty($page))$page = 1;
$datetime = new DateTime();
$timestamp = $datetime->getTimestamp();
$remoteip = $_SERVER['REMOTE_ADDR'];

if(empty($act))$act = "AGLogin";

$jsonparame="";

if($act=="AGLogin"){
    $Req = '{"password":"'.$AGPassword.'","remoteip":"'.$remoteip.'","method":"AGLogin","username":"'.$AGName.'","timestamp":'.$timestamp.'}';
    //$Req = '{"password":"cit001123","remoteip":"192.168.1.1","method":"AGLogin","username":"cit001","timestamp":1497866722526}';
    $Method = "AGLogin";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
 
}else if($act=="CreateMember"){
    if(empty($currency))$currency = "RMB";
    $Req = '{"password":"'.$AGPassword.'","remoteip":"'.$remoteip.'","memname":"'.$AGName.'","token":"'.$token.'","currency":"'.$currency.'"}';
    $Method = "CreateMember";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="Deposit"){
    $Req = '{"amount":"'.$amount.'","remoteip":"'.$remoteip.'","memname":"'.$memname.'","token":"'.$token.'","memid":"'.$memid.'","payno":"'.$payno.'","agentCode":"'.$aCode.'"}';
    $Method = "Deposit";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="Withdraw"){
    $Req = '{"amount":"'.$amount.'","remoteip":"'.$remoteip.'","memname":"'.$memname.'","token":"'.$token.'","memid":"'.$memid.'","payno":"'.$payno.'","agentCode":"'.$aCode.'"}';
    $Method = "Withdraw";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="LaunchGame"){
    $Req = '{"password":"'.$Mempassword
        .'","remoteip":"'.$remoteip
        .'","memname":"'.$memname
        .'","token":"'.$token
        .'","memid":"'.$memid
        .'","grp":"'.$group
        .'","machine":"'.$machine.'","langx":"'.$langx.'","agentCode":"'.$aCode.'"}';
    $Method = "LaunchGame";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="WagerUrl"){
    $Req = '{"password":"'.$Mempassword.'","remoteip":"'.$remoteip.'","memname":"'.$memname.'","token":"'.$token.'","memid":"'.$memid.'","machine":"'.$machine.'","langx":"'.$langx.'","settle":"'.$settle.'","agentCode":"'.$aCode.'"}';
    $Method = "WagerUrl";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="chkMemberBalance"){
    $Req = '{"memname":"'.$memname.'","token":"'.$token.'","memid":"'.$memid.'"}';
    $Method = "chkMemberBalance";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="ShowMember"){
    $Req = '{"memname":"'.$memname.'","token":"'.$token.'","memid":"'.$memid.'","agentCode":"'.$aCode.'"}';
    $Method = "ShowMember";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="ShowAllMembers"){
    $Req = '{"token":"'.$token.'","page":"'.$page.'","timestamp":"'.$timestamp.'","onlinestatus":"'.$onlinestatus.'"}';
    $Method = "ShowAllMembers";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="MemWager"){
    $Req = '{"memname":"'.$memname.'","memid":"'.$memid.'","dateStart":"'.$dateS.'","dateEnd":"'.$dateE.'","settle":"'.$settle.'","token":"'.$token.'","page":"'.$page.'","timestamp":"'.$timestamp.'"}';
    $Method = "MemWager";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="ALLWager"){
    $Req = '{"agname":"'.$AGName.'","agid":"'.$AGID.'","dateStart":"'.$dateS.'","dateEnd":"'.$dateE.'","settle":"'.$settle.'","token":"'.$token.'","page":"'.$page.'","timestamp":"'.$timestamp.'"}';
    $Method = "ALLWager";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="ChkTransInfo"){
    $Req = '{"memname":"'.$memname.
        '","memid":"'.$memid.
        '","transidtype":"'.$transtype.
        '","transid":"'.$transid.
        '","settle":"'.$settle.
        '","token":"'.$token.
        '"}';
    $Method = "ChkTransInfo";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="GetTransInfo"){
    $Req = '{"memname":"'.$memname.
        '","memid":"'.$memid.
        // '","transidtype":"'.$tidtype.
        // '","transid":"'.$transid.
        // '","settle":"'.$settle.
        '","token":"'.$token.
        '"}';
    $Method = "GetTransInfo";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="CheckWager"){
    // $Req = '{"agname":"'.$AGName.'","agid":"'.$AGID.'","settle":"'.$settle.'","token":"'.$token.'","page":"'.$page.'","timestamp":"'.$timestamp.'"}';
    $Req = '{"agname":"'.$AGName.'","agid":"'.$AGID.'","settle":"'.$settle.'","token":"'.$token.
        '","page":"'.$page.
        '","wid":"'.$wid.
        '","timestamp":"'.$timestamp.'"}';
    $Method = "CheckWager";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="GetWagerID"){
    $Req = '{"agname":"'.$AGName.'","agid":"'.$AGID.'","settle":"'.$settle.'","token":"'.$token.
        '","page":"'.$page.
        '","wid":"'.$wid.
        '","timestamp":"'.$timestamp.'"}';
    
    $Method = "ALLWagerById";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="GetWagerIDM"){
    $Req = '{"memname":"'.$memname.'","agid":"'.$AGID.'","settle":"'.$settle.'","token":"'.$token.
        '","memid":"'.$memid.
        '","page":"'.$page.
        '","wid":"'.$wid.
        '","timestamp":"'.$timestamp.'"}';
    $Method = "MemWagerById";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="SetMemGrp"){
    $Req = '{"memname":"'.$memname.
        '","memid":"'.$memid.
        '","grp":"'.$grp.
        '","token":"'.$token.
        '"}';
    $Method = "SetMemGrp";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="LaunchDemo"){
    $Req = '{"remoteip":"'.$remoteip
        .'","token":"'.$token
        .'","machine":"'.$machine.'","langx":"'.$langx.'","agentCode":"'.$aCode.'"}';

    $Method = "LaunchDemo";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="MemTrans"){
    $Req = '{"memname":"'.$memname.
        '","memid":"'.$memid.
        '","dateEnd":"'.$dateE.
        '","dateStart":"'.$dateS.
        '","page":"'.$page.
        '","timestamp":"'.$timestamp.
        '","token":"'.$token.
        '"}';
    $Method = "MemTrans";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="ALLTrans"){
    $Req = '{"agname":"'.$agname.
        '","agid":"'.$AGID.
        '","dateEnd":"'.$dateE.
        '","dateStart":"'.$dateS.
        '","page":"'.$page.
        '","timestamp":"'.$timestamp.
        '","agentCode":"'.$aCode.
        '","token":"'.$token.
        '"}';
    $Method = "ALLTrans";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);

}else if($act=="KickOutMem"){
    $Req = '{"memname":"'.$memname.'","token":"'.$token.'","memid":"'.$memid.'","agentCode":"'.$aCode.'"}';
    $Method = "KickOutMem";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="KickOutAllMem"){
    $Req = '{"token":"'.$token.'","page":"'.$page.'","timestamp":"'.$timestamp.'"}';
    $Method = "KickOutAllMem";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act=="ChangeMemPswd"){
    $Req = '{"memname":"'.$memname.
        '","memid":"'.$memid.
        '","newpswd":"'.$newpswd.
        '","oldpswd":"'.$oldpswd.
        '","token":"'.$token.
        '"}';
    $Method = "ChangeMemPswd";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
}else if($act == "CheckReport"){

    $Req = '{"agname":"'.$AGName.'","agid":"'.$AGID
        .'","datestart":"'.$dateS
        .'","dateend":"'.$dateE
        .'","settle":"'.$settle
        .'","token":"'.$token
        .'","page":"'.$page
        .'","timestamp":"'
        .$timestamp.'"}';
    $Method = "CheckReport";
    $AGID = $AGID;
    $obj["Method"] = $Method;
    $obj["AGID"] = $AGID;
    $obj["Request"] = CheckCode_DE_EN($Req,$secretKey,"encode",$phpVer);
    $jsonparame = json_encode($obj);
    
}else if($act=="GetDecode"){
    $text = $text;
    if(version_compare($phpVer,'7.0.0',"lt")){
        echo AES_decrypt($text,$secretKey);    
    }else{
        echo decrypt($text,$secretKey);    
    }
    exit;
}else if($act=="GetEncode"){
    $text = $text;
    if(version_compare($phpVer,'7.0.0',"lt")){
        echo AES_encrypt($text,$secretKey);    
    }else{
        echo encrypt($text,$secretKey);    
    }
    exit;
}else if($act=="AESencode"){
    $test = "abc";
    if(version_compare($phpVer,'7.0.0',"lt")){
        echo AES_encrypt($text,$secretKey);    
    }else{
        echo encrypt($text,$secretKey);    
    }
    // echo AES_encrypt($test,$secretKey);
    exit;
}else if($act=="AESdecode"){
    $test = "Kdt8P+pk7pp3FoxHI2zOtL+KQb2ijX/vGMjxlAr1OiMSIrqJOsNlIP4nmz/J1UJ2YcFDKptH0p3b7nMH5B1Ag1rUtFljqlFnoB9KRQz66av8tLoKNtvRShta70RZxiAAFFHHvhOddrDeZMJlIJd2Hw==";             
    // echo AES_decrypt($test,$secretKey);
    if(version_compare($phpVer,'7.0.0',"lt")){
        echo AES_decrypt($text,$secretKey);    
    }else{
        echo decrypt($text,$secretKey);    
    }
    exit;
}else if($act="test"){
    $url = 'https://www.666wins.com/as-lobby/lobby/login.do?auth=8932C605374B6E36574A39336132623161346531346335656233356534643533323330383730623334313934&jumpType=0&lang=hk';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    //若给定url自动跳转到新的url,有了下面参数可自动获取新url内容：302跳转
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); //驗證伺服器憑證
    //设置cURL允许执行的最长秒数。
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0');
    curl_setopt($ch, CURLOPT_REFERER, $url);
    curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');
    $content = curl_exec($ch);
    //获取请求返回码，请求成功返回200
    $code = curl_getinfo($ch,CURLINFO_HTTP_CODE);
    echo $code . "\n\n";

    //获取一个cURL连接资源句柄的信息。
    //$headers 中包含跳转的url路径 
    $headers = curl_getinfo($ch);
    var_dump($headers);

    // $content 为url请求内容
    echo "\n\n" . $content . "\n";
    exit;
}

if($jsonparame!=""){
    //送資料
    $ch = curl_init();
    echo "1";
    curl_setopt($ch, CURLOPT_URL,$url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));//设置HTTP头
    curl_setopt($ch, CURLOPT_POST, true); // 啟用POST
    curl_setopt($ch, CURLOPT_POSTFIELDS,$jsonparame);  //POST資料
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //設定可傳
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); //驗證伺服器憑證
    echo '2';
    $server_output = curl_exec ($ch);
    echo '3';
    if(curl_errno($ch)){//出错则显示错误信息
        print curl_error($ch);
  
    }
    curl_close ($ch);
    // echo $server_output;
  
    // echo AES_decrypt($server_output,$secretKey);
    echo CheckCode_DE_EN($server_output,$secretKey,"decode",$phpVer);
     echo $server_output;
     echo $secretKey;
     echo $phpVer;
     //echo $Req."</br>".$jsonparame."</br>".AES_decrypt($server_output,$secretKey);
}
exit;

function CheckCode_DE_EN($text,$secretKey,$type,$phpVer){
    if(version_compare($phpVer,'7.0.0',"lt")){
        if($type=="encode"){
            return AES_encrypt($text,$secretKey);    
        }else if($type=="decode"){
            return AES_decrypt($text,$secretKey);    
            
        }
    }else{
        if($type=="encode"){
            return  encrypt($text,$secretKey);
        }else if($type=="decode"){
            return  decrypt($text,$secretKey);
        }
    }
}

//php mcrypt extension 必須加裝套件
function AES_encrypt($data , $secretKey, $app_cc_aes_iv=''){
    $padding = 16 - (strlen($data) % 16);
    $data .= str_repeat(chr($padding), $padding);
    $encrypt = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $secretKey, $data, MCRYPT_MODE_ECB, $app_cc_aes_iv);
    $encrypt_text = base64_encode($encrypt);
    return $encrypt_text;
}

function AES_decrypt($data,$secretKey,$app_cc_aes_iv=''){
    $encrypt = base64_decode($data);
    $data = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $secretKey, $encrypt, MCRYPT_MODE_ECB, $app_cc_aes_iv);
    $padding = ord($data[strlen($data) - 1]);
    $decrypt_text = substr($data, 0, -$padding);
    return $decrypt_text;
}


//php 7.1以上
  /**
     *
     * @param string $string 需要加密的字符串
     * @param string $key 密钥
     * @return string
     */
    function encrypt($string, $key)
    {
        $data = openssl_encrypt($string, 'AES-128-ECB', $key, OPENSSL_RAW_DATA);
        $data = base64_encode($data);
        return $data;
    }


    /**
     * @param string $string 需要解密的字符串
     * @param string $key 密钥
     * @return string
     */
    function decrypt($string, $key)
    {
        $string= base64_decode($string);
        $decrypted = openssl_decrypt($string, 'AES-128-ECB', $key, OPENSSL_RAW_DATA);
        return $decrypted;
    }


?>