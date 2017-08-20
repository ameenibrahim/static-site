function injectNav(pageNum) {
    var navHTML= "<nav id='nav'>"+
    "<div class='innertube'>"+
        "<h3>Requirement</h3> "+
        "<ul> "+
        "  <li id='liN1' ><a href='index.html'>Home</a></li>"+
        "  <li id='liN2' ><a href='req.html'>Req Doc</a></li>"+
        "</ul>"+
        "<h3>Output</h3>"+
        "<ul>"+
        "  <li id='liN3' ><a href='scr1.html'>ScreenShot1</a></li>"+
        "    <li id='liN4' ><a href='scr2.html'>ScreenShot2</a></li>"+
        "    <li id='liN5' ><a href='scr3.html'>ScreenShot3</a></li>"+
        "</ul>"+
        "<h3>Infra Design</h3>"+
        "<ul>"+
        "  <li id='liN6'><a href='vpc.html'>VPC Layout</a></li>"+
        "  <li id='liN7'><a href='instance.html'>Instances Layout</a></li>"+
        "  <li id='liN8'><a href='network.html'>Network Map</a></li>"+
        "</ul>"+
        "<h3>Solution</h3>"+
        "<ul>"+
        "  <li id='liN9'><a href='ansible.html'>1. CFN + Ansible</a></li>"+
        "  <li id='liN10'><a href='cfn.html'>2. CFN + Bootstrap (*)</a></li>"+
        "  <li id='liN11'><a href='eb.html'>3. Elastic Beanstalk</a></li>"+
        "  <li id='liN12'><a href='codedeploy.html'>4. CFN + CDN</a></li>"+
        "</ul>"+
        "<h3>Deployment</h3>"+
        "<ul>"+
        "  <li id='liN13'><a href='roll.html'>1. Rolling Deployment (*)</a></li>"+
        "  <li id='liN14'><a href='bg.html'>2. Blue Green Deployment</a></li>"+
        "  <li id='liN15'><a href='ops.html'>3. Code Deploy / OpsWork</a></li>"+
        "</ul>"+
        "<span style='font-weight:bold;margin-top: 10px;float: left;'>(*) --> Current Solution </span>"+
        "<a target='_blank' href='https://github.com/ameenibrahim/AWS-CF-ASG-WEBSERVER'><span><svg height='50' version='1.1' viewBox='0 0 16 16' width='50' style='margin-top: 10px;margin-left: -8px;float: left;'>"+
        "<path fill-rule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path></svg>"+
        "<span style='font-weight:bold;margin-top: 22px;margin-left:10px;float: left;'>GitHub<span> <span></a>"+
    "</div>"+
    "</nav>"
    var newNav = navHTML.replace("liN"+pageNum+"'" , "liN"+pageNum+"'"+" style='background-color:#D3D3D3'");

    document.getElementById('nav-id').innerHTML = newNav;
}