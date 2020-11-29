
# Healthcare-Blockchain
Each folder holds the source code to implement each scenario detailed in the report. As well as the source code each folder apart from **\encrpytion scenario** has a JavaScript file called **test.js** which can be used to test each business network on Hyperledger Composer.  
This readme will outline the configuration of a **.bna** as well as the structure. 

  

## Prerequisites

  

<li> Ubuntu 16+

<li>Install Hyperledger Fabric

<li>Install Hyperledger Composer

  
  

## Configuration

<li> Open linux terminal

<li> Go to the fabric directory start fabric and create a peer admin card

  

```terminal

cd ~/fabric-dev-servers

export FABRIC_VERSION=hlfv11

./startFabric.sh

./createPeerAdminCard.sh

```

  

<li> Go to BNA Directory

<li> Configure the bna

  

```terminal

composer archive create -t dir -n .

composer network install --card PeerAdmin@hlfv1 --archiveFile xxx@yy.bna

composer network start --networkName xxx --networkVersion yy --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

```

<li> start hyperledger composer

  

```terminal

composer-playground

```

  

  

## BNA Structure
The files in bold have all been detailed within the report and can be seen as high importance files.
  

<li> Unzip BNA

![
](BNA%20Decompressed.PNG)

<li>lib\ehr.js - **Script file** *(N/A in Basic Scenario)*
<li>models\org.health.system.cto - **Model File**
<li>permissions.acl - **Permission File**
<li>queries.qry - **Query File** *(Only present in Encryption)*
<li>package.json - Configuration File  


