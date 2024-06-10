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
                        background-color: #f5f5f5;
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 800px;
                        margin: 20px auto;
                        padding: 20px;
                        background-color: #fff;
                        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                        border-radius: 10px;
                        border-left: 10px solid #007bff;
                    }
                    .header {
                        text-align: left;
                        margin-bottom: 20px;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 2.5em;
                        font-weight: bold;
                        color: #007bff;
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
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>${name}</h1>
                        <p><i class="fas fa-envelope"></i> ${email}</p>
                        <p><i class="fas fa-phone"></i> ${phone}</p>
                        <p><i class="fab fa-linkedin"></i> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
                        <p><i class="fab fa-github"></i> <a href="${github}" target="_blank">${github}</a></p>
                    </div>
                    <div class="section">
                        <div class="section-title">Education</div>
                        <div class="list-item">
                            <p><strong>${edu1_school}</strong> (${edu1_year})</p>
                            <p>${edu1_qualification}</p>
                            <p>${edu1_desc}</p>
                        </div>
                        <div class="list-item">
                            <p><strong>${edu2_school}</strong> (${edu2_year})</p>
                            <p>${edu2_qualification}</p>
                            <p>${edu2_desc}</p>
                        </div>
                    </div>
                    <div class="section">
                        <div class="section-title">Skills</div>
                        <p>${skills}</p>
                    </div>
                    <div class="section">
                        <div class="section-title">Projects</div>
                        <div class="list-item">
                            <p><strong>${proj1_title}</strong> - <a href="${proj1_link}" target="_blank">${proj1_link}</a></p>
                            <p>${proj1_desc}</p>
                        </div>
                        <div class="list-item">
                            <p><strong>${proj2_title}</strong> - <a href="${proj2_link}" target="_blank">${proj2_link}</a></p>
                            <p>${proj2_desc}</p>
                        </div>
                    </div>
                    <div class="section">
                        <div class="section-title">Experience</div>
                        <div class="list-item">
                            <p><strong>${exp1_org}</strong> - ${exp1_pos} (${exp1_dur})</p>
                            <p>${exp1_desc}</p>
                        </div>
                        <div class="list-item">
                            <p><strong>${exp2_org}</strong> - ${exp2_pos} (${exp2_dur})</p>
                            <p>${exp2_desc}</p>
                        </div>
                    </div>
                    <div class="section">
                        <div class="section-title">Extra-Curriculars/Activities</div>
                        <div class="list-item">
                            <p><strong>Languages:</strong> ${extra_1}</p>
                            <p><strong>Hobbies:</strong> ${extra_2}</p>
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
