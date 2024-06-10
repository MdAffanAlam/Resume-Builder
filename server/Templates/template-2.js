module.exports = ({
  name,
  email,
  phone,
  linkedin,
  github,
  skills,
  exp1_org,
  exp1_pos,
  exp1_desc,
  exp1_dur,
  exp2_org,
  exp2_pos,
  exp2_desc,
  exp2_dur,
  proj1_title,
  proj1_link,
  proj1_desc,
  proj2_title,
  proj2_link,
  proj2_desc,
  edu1_school,
  edu1_year,
  edu1_qualification,
  edu1_desc,
  edu2_school,
  edu2_year,
  edu2_qualification,
  edu2_desc,
  extra_1,
  extra_2,
}) => {
  return `
    <!doctype html>
    <html>
    <head>
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
        <style>
            body {
                font-family: 'Garamond', serif;
                background-color: #f8f9fa;
                color: #343a40;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 800px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                border-left: 10px solid #ff5722;
                border-radius: 10px;
            }
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
            .header h1 {
                margin: 0;
                font-size: 2.5em;
                font-weight: bold;
                position: relative;
                display: inline-block;
            }
            .header h1::after {
                content: '';
                display: block;
                width: 50%;
                height: 5px;
                background: #ff5722;
                margin: 8px auto 0;
            }
            .header p {
                margin: 5px 0;
                font-size: 1.2em;
                color: #666;
            }
            .section-title {
                font-size: 1.5em;
                border-bottom: 2px solid #007bff;
                padding-bottom: 5px;
                margin-bottom: 10px;
                color: #007bff;
                display: flex;
                align-items: center;
            }
            .section-title i {
                margin-right: 10px;
            }
            .section {
                margin-bottom: 20px;
            }
            .section p {
                margin: 5px 0;
            }
            .list-item {
                margin-bottom: 10px;
            }
            a {
                color: #007bff;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
            .icon {
                color: #020f1e;
                margin-right: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1><i class="fas fa-user icon"></i>${name}</h1>
                <p><i class="fas fa-envelope icon"></i>${email}</p>
                <p><i class="fas fa-phone icon"></i>${phone}</p>
                <p><i class="fab fa-linkedin icon"></i><a href="${linkedin}" target="_blank">${linkedin}</a></p>
                <p><i class="fab fa-github icon"></i><a href="${github}" target="_blank">${github}</a></p>
            </div>
            <div class="section">
                <div class="section-title"><i class="fas fa-laptop-code"></i>Skills</div>
                <p><i class="fas fa-check icon"></i>${skills}</p>
            </div>
            <div class="section">
                <div class="section-title"><i class="fas fa-briefcase"></i>Experience</div>
                <div class="list-item">
                    <p><i class="fas fa-building icon"></i><strong>${exp1_org}</strong> - ${exp1_pos} (${exp1_dur})</p>
                    <p><i class="fas fa-info-circle icon"></i>${exp1_desc}</p>
                </div>
                <div class="list-item">
                    <p><i class="fas fa-building icon"></i><strong>${exp2_org}</strong> - ${exp2_pos} (${exp2_dur})</p>
                    <p><i class="fas fa-info-circle icon"></i>${exp2_desc}</p>
                </div>
            </div>
            <div class="section">
                <div class="section-title"><i class="fas fa-project-diagram"></i>Projects</div>
                <div class="list-item">
                    <p><i class="fas fa-project-diagram icon"></i><strong>${proj1_title}</strong> - <a href="${proj1_link}" target="_blank">${proj1_link}</a></p>
                    <p><i class="fas fa-info-circle icon"></i>${proj1_desc}</p>
                </div>
                <div class="list-item">
                    <p><i class="fas fa-project-diagram icon"></i><strong>${proj2_title}</strong> - <a href="${proj2_link}" target="_blank">${proj2_link}</a></p>
                    <p><i class="fas fa-info-circle icon"></i>${proj2_desc}</p>
                </div>
            </div>
            <div class="section">
                <div class="section-title"><i class="fas fa-graduation-cap"></i>Education</div>
                <div class="list-item">
                    <p><i class="fas fa-school icon"></i><strong>${edu1_school}</strong> (${edu1_year})</p>
                    <p><i class="fas fa-info-circle icon"></i>${edu1_qualification}</p>
                    <p><i class="fas fa-info-circle icon"></i>${edu1_desc}</p>
                </div>
                <div class="list-item">
                    <p><i class="fas fa-school icon"></i><strong>${edu2_school}</strong> (${edu2_year})</p>
                    <p><i class="fas fa-info-circle icon"></i>${edu2_qualification}</p>
                    <p><i class="fas fa-info-circle icon"></i>${edu2_desc}</p>
                </div>
            </div>
            <div class="section">
                <div class="section-title"><i class="fas fa-star"></i>Extra-Curriculars/Activities</div>
                <div class="list-item">
                    <p><i class="fas fa-language icon"></i><strong>Languages:</strong> ${extra_1}</p>
                    <p><i class="fas fa-running icon"></i><strong>Hobbies:</strong> ${extra_2}</p>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
        </body>
        </html>
        
    
    `;
};
