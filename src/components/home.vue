<!-- eslint-disable max-len -->
<template>
  <div>
    <home-navbar />

    <div class="container pt-sm-4">
      <div class="p-4 p-md-5 mb-4 bg-dark text-light" style="border-radius: 0.5rem">
        <div class="container-fluid pt-4">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div class="me-md-5">
              <img :src="aicpaLogo" style="border-radius: 100%" height="250">
            </div>
            <div class="mt-4">
              <h1 class="display-5 fw-bold">The SOC 2 Guide</h1>
              <h4 class="">Quickly figure out what you need and how much it will cost.</h4>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap mt-4">
          <div class="p-4 justify-content-center bg-primary callout-section" style="border-radius: 0.5rem;">
            <p>Guide Sections:
              <ul class="ms-auto me-4 mb-2 mb-md-0">
                <li>
                  <a class="guide-section-link" aria-current="page" href="#automation-platforms" @click="navigateTo('automation-platforms')">Platforms</a>
                </li>
                <li>
                  <a class="guide-section-link" aria-current="page" href="#auditors" @click="navigateTo('auditors')">Auditors</a>
                </li>
                <li>
                  <a class="guide-section-link" aria-current="page" href="#pen-tests" @click="navigateTo('pen-tests')">Pen Tests</a>
                </li>
                <li>
                  <a class="guide-section-link" aria-current="page" href="#process" @click="navigateTo('process')">Process</a>
                </li>
                <li>
                  <a class="guide-section-link" aria-current="page" href="#guide" @click="navigateTo('guide')">Guide</a>
                </li>
                <li>
                  <a class="guide-section-link" aria-current="page" href="#reading" @click="navigateTo('reading')">Suggested Reading</a>
                </li>
                <li>
                  <a class="guide-section-link" aria-current="page" href="#tools" @click="navigateTo('tools')">Tools</a>
                </li>
              </ul>
            </p>
          </div>

          <div class="p-4 justify-content-end bg-secondary callout-section" style="border-radius: 0.5rem">
            <p>This is a completely open source quick guide, that focuses on comparing the available options.
              <br><br>
              We are SOC auditor agnostic. If you find something out of date, create an issue or make an update.
              <br>
            </p>
            <div class="d-flex justify-content-end">
              <button class="btn btn-primary btn-sm align-items-center" type="button" @click="() => openGithub(true)">
                <i class="fa-solid fa-ticket me-1" />Create an issue</button>
              <button class="btn btn-dark btn-sm ms-2 d-flex align-items-center" type="button" @click="() => openGithub(false)">
                <i class="fa-solid fa-bolt me-1" />Make an update</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mb-4 w-100">
        <div class="d-flex row">
          <div class="col-12 col-lg-6 mb-4 mb-lg-0">
            <div class="h-100 p-4 p-md-5 text-white bg-dark d-flex flex-column" style="border-radius: 0.5rem;">
              <div>
                <h2>The FYI</h2>
                You already did the hard work of securing your technology, so getting the attestation proving it should be easy. But it still isn't.
              </div>
              <div class="d-flex flex-column justify-content-around flex-grow-1">
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-arrows-left-right-to-line fa-2x me-4" />
                  <div>
                    <h3>Gap Analysis</h3>
                    <div>Figure out where you are at versus where you should be. And then you can use this to know what automation to run.</div>
                  </div>
                </div>
                
                <br>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-gears fa-2x me-4" />
                  <div>
                    <h3>Security Automation</h3>
                    <div>Update your policies and infrastructure to fill in these gaps. Use the automation to ensure your technical policies are being followed.</div>
                  </div>
                </div>
                <br>

                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-pencil fa-2x me-4" />
                  <div>
                    <h3>Attestation</h3>
                    <div>Ask an auditor to sign off on your policies and infrastructure automation by giving you a badge and a report.</div>
                  </div>
                </div>
                <br>
                <div class="d-flex justify-content-center align-items-center">
                  <h4>That's it, pretty simple right?</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="h-100 p-4 p-md-5 bg-light border" style="border-radius: 0.5rem;">
              <h2>So what is SOC 2 really?</h2>
              <p>SOC 2 is a <strong>marketing and sales tool</strong> that allows you to put a rubber stamp on your website. SOC 2 implies <strong class="text-danger">nothing about security</strong>. Done correctly, there can be value in it for you. But please don't mistake having a SOC 2 badge for being secure.
                <br><br>At completion you will have:
                <ul>
                  <li><strong>Policy set</strong>: You have written your own policies. And then you ask the auditor to validate that you are following them.</li>
                  <br>
                  <li><strong>A compliance report</strong>: To receive a report to provide your customers, this includes all the details of your policies for anything in scope.</li>
                  <br>
                  <li><strong>An attestation icon and url</strong>: Additionally you'll get a link to put on your website. This proves they did the audit.</li>
                </ul>
              </p>

              <div class="mt-3">You define your policies. You determine what is in scope or not. What you include will be audited and then appear in your report.</div>
              <div class="mt-3">Since the policies are up to you, the SOC 2 audit is a commodity so any licensed auditor works the same.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <platforms />

    <auditors />

    <br id="process">
    <div class="container">
      <div class="align-items-lg-stretch mt-4">
        <div class="mb-4">
          <div class="h-100 p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <h2>The SOC 2 Process</h2>
            <p>
              Earning a SOC 2 requires a Company to undergo a third-party examination by a Certified Public Accountant (CPA). The CPA is required to follow a set of AICPA standards to perform the audit and issue the report. Most companies follow a logical process to earning their SOC 2:
            </p>
            <br>
            <p>
              <h3>[Step 0] Do I need a SOC 2?</h3>
              <div>Since SOC 2 is a marketing tool, the default is <strong>You don't need a SOC 2 certification</strong>. If you start losing deals because your customers are asking for one, then you can take the next step. Do not attempt SOC 2 before you have customers asking for it. It is a waste of time, money, and most importantly can slow your development process down. If you already have good security hygiene, getting a rubber stamp provides no additional value. If you don't have a great handle on infrastructure security practices. Check out the <a href="https://mvsp.dev/mvsp.en/" target="_blank" rel="noopener">Minimum Viable Secure Product</a>.</div>
            </p>
            <br>
            <p>
              <h3>[Step 1] Readiness examination</h3>
              <div>An exercise where your Company finds out the current status of the organization as it relates to SOC 2 controls. Organizations use readiness examinations to prepare for their SOC 2 assessment and learn what gaps they must resolve before earning their SOC 2. Once you have completed this mini-internal audit, ask yourself, do I still need to get a SOC 2 rubber stamp?</div>
            </p>
            <br>
            <p>
              <h3>[Step 2] Type I</h3>
              Type I means you defined some policies. Companies with a Type I, means they have decided what processes they want to follow. However it doesn't even mean they are following them. This of the Type I as a set of security policy commandments. Having this list is can be a good start if you are looking for a way to improve your security posture. The Type I can be driving force in your organization.
            </p>
            <br>
            <p>
              <h3>[Step 3] Type II</h3>
              Type II is the proof you are following the policies and controls outlined in your Type I. After a specified period of time (anywhere from 3-12 months) organizations earn their first SOC 2 Type II. Typically the Type II review period begins the day after the date of the Type I review period.
            </p>
            <br>
            <p>
              <h3>[Step 4] Review</h3>
              Your SOC 2 will essentially expire after 12 months. So if you want to keep it active, you are committing to paying for it on a recurring basis. And a huge part of that is reviewing your policies and every year you'll need to undergo a Type 2 examination to keep your SOC 2 current.
            </p>

            <div class="d-flex justify-content-center"><small>Source:  <a target="_blank" href="https://sansorg.egnyte.com/dl/x9796IIIVP">SANS SOC 2 Cheatsheet</a></small></div>
          </div>
        </div>
      </div>
    </div>

    <br id="guide">
    <div class="w-100">
      <div class="m-0 p-4 p-md-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom header-link" @click="() => navigateTo('guide')">Pass the SOC 2 Type II Audit</h2>
        <div>The system description must be presented in accordance with the AICPA's description criteria (DC 200). Each of the description criteria (DC) are described below:</div>
        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-cubes fa-2x fa-fw" />
            </div>
            <div>
              <h2>DC1: Types of services provided</h2>
              <p>Describe what services the service organization provides as it relates to the system in scope.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-seedling fa-2x fa-fw" />
            </div>
            <div><h2>DC2: Principal service commitments and system requirements</h2><p>This section lets the reader know what commitments and system requirements the service organization is making, and which documents the reader can find these commitments in (e.g. MSA, SLAs, Privacy Policy, etc.). This helps give the reader context as to what trust services categories are in-scope and why.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-code-branch fa-2x fa-fw" />
            </div>
            <div><h2>DC3: Components of the system</h2><p>The components described here include the infrastructure, software, people, procedures, and data that support and make up the system. For many Cloud Service Providers (CSP), the infrastructure section will include their hosting provider (such as Amazon Web Services). The software section should list the software and applications that support delivering the service in scope. The people section should include an overview of the departments or key personnel that support the system and what they do. Procedures should state what procedures are and their purpose. Data should discuss what the data is that the system processes (what is your customer data), as well as any other data that directly supports the system.</p></div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-shield-halved fa-2x fa-fw" />
            </div>
            <div><h2>DC4: System incidents</h2>
              <p>Describe any security incidents that rose to the level where your company failed to either meet criteria, your commitments to customers, or your system requirements.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-diagram-next fa-2x fa-fw" />
            </div>
            <div><h2>DC5: Applicable trust services criteria and related controls</h2><p>Describe the criteria that are in-scope so that the reader understands the criteria the service organization is being measured against. The service organization will also discuss in detail the control environment and describe the controls that support it. This is a narrative section that is essentially a lighter version of the information security policy.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-graduation-cap fa-2x fa-fw" />
            </div>
            <div>
              <h2>DC6: Complementary user entity controls (CUECs)</h2>
              <p>CUECs are the controls that the service organization's customers need to have in place in order for the system and control environment to be complete and achieve its objectives. For example, maybe the customers need to have their own logical access controls in place so that only authorized users access the service, otherwise, unauthorized access may cause you to fail to meet your security commitments.</p>
            </div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-regular fa-object-ungroup fa-2x fa-fw" />
            </div>
            <div><h2>DC7: Complementary subservice organization controls (CSOCs)</h2><p>The service organization will discuss the subservice organizations that support the system and control environment. Subservice organizations are vendors that you cannot meet your criteria, commitments, or system requirements without. For most CSPs, that is going to be the cloud hosting provider (AWS, GCP, Azure, etc.)</p></div>
          </div>
        </div>

      </div>
    </div>

    <br id="reading">
    <div class="w-100">
      <div class="m-0 p-4 p-4 p-md-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom header-link" @click="() => navigateTo('reading')">External References</h2>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-2">
          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-comments-dollar fa-2x fa-fw" />
            </div>
            <div>
              <h2>Buying Security by <a href="https://tldrsec.com/" target="_blank">TL;DR Sec</a></h2>

              <p><a target="_blank" href="https://tldrsec.com/p/guides-buying-security">Buying Security</a>
                <br>A fantastic guide synthesized from almost two hundred resources, as well as a survey of over a hundred security professionals.
                <br><br>

                Breaks down the types of security consulting, motivations behinds assessments, potential vendors, as well as how to scope and prepare for your assessment.
              </p>
            </div>
          </div>

          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-building-shield fa-2x fa-fw" />
            </div>
            <div>
              <h2>Practical guidance for companies</h2>
              <p><a target="_blank" href="https://www.npsa.gov.uk/secure-innovation/company-guidance">NPSA UK Secure Innovation</a>
                <br>Competition to succeed in emerging technology can be intense. This guidance outlines cost-effective measures that you can take from day one to better protect your ideas, reputation and future success.
                <br><br>

                This can even become the basis of your SOC 2. These are real threats, which suggest threat models which could apply. If they do apply, it can really help to target policies to deal with specifically these.
              </p>
            </div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-2">
          
          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-layer-group fa-2x fa-fw" />
            </div>
            <div>
              <h2>Tailscale's Security Policies</h2>
              <p><a target="_blank" href="https://github.com/tailscale/security-policies#tailscale-security-policies">Tailscale's public SOC 2 Policies on GitHub</a>
                <br>Tailscale has several security policies in place to properly identify, respond to, and mitigate potential security risks. All employees, vendors and contractors working with Tailscale must follow these policies in order to best protect Tailscale's and its customers' data.
                <br><br>

                They've published these publicly for transparency, so that you can see where they are in terms of security maturity.
              </p>
            </div>
          </div>

          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-wand-sparkles fa-2x fa-fw" />
            </div>
            <div>
              <h2>Comply SOC 2 Automation Tool</h2>
              <p><a target="_blank" href="https://github.com/strongdm/comply/blob/master/README.md">Comply open source automation</a>
                <br>
                <ul>
                  <li><strong>Policy Generator</strong>: markdown-powered document pipeline for publishing auditor-friendly policy documents</li>
                  <li><strong>Ticketing Integration</strong>: automate compliance throughout the year via your existing ticketing system</li>
                  <li><strong>SOC 2 Templates</strong>: open source policy and procedure templates suitable for satisfying a SOC 2 audit</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-2">
          
          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-regular fa-copy fa-2x fa-fw" />
            </div>
            <div>
              <h2>JupiterOne's Policy Builder</h2>
              <p><a target="_blank" href="https://github.com/JupiterOne/security-policy-templates#security-policy-templates">Standup-alone polices or integrated policy builder</a>
                <br>A set of foundational but comprehensive policies, standards and procedures designed for cloud-native technology organizations. The policy package covers the requirements and controls for most compliance frameworks and best practices, in a lightweight approach.
                <br><br>

                They can be used as stand-alone documents. But the structure is designed to be best suited for use with the <a href="https://github.com/JupiterOne/security-policy-builder" target="_blank">jupiter-policy-builder CLI</a> and the policies app on the <a href="https://www.jupiterone.com/" target="_blank">JupiterOne platform</a>.
              </p>
            </div>
          </div>

          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-play-circle fa-2x fa-fw" />
            </div>
            <div>
              <h2>Minimum Viable Secure Product</h2>
              <p><a target="_blank" href="https://mvsp.dev/mvsp.en/">List of the minimal controls</a>
                <br>Minimum Viable Secure Product is a minimalistic security checklist for B2B software and business process outsourcing suppliers.
                <br><br>

                They recommend that all companies building B2B software or otherwise handling sensitive information under its broadest definition implement at least the following controls, and are strongly encouraged to go well beyond them in their security programs.
              </p>
            </div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-2">
          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-user-shield fa-2x fa-fw" />
            </div>
            <div>
              <h2>A Guide to personal security</h2>
              <p><a target="_blank" href="https://soc2.fyi/documents/Device-and-Account-Security-Checklist.pdf">US DNC Security Checklist</a>
                <br>They strongly recommend anyone who works in politics, campaigns, or really anyone who has a device or an account on the internet, take these steps to secure them.
                <br><br>

                A guide that is broken down into easy to follow steps for personal security. While it is directed at those in a specific industry there is really good starter advice here, that can get you far. (Don't listen to the advice about LastPass though, the approved list of Password Managers should be BitWarden, 1Password, Chrome Password Manager, and Apple Keychain.)
              </p>
            </div>
          </div>

          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-lock fa-2x fa-fw" />
            </div>
            <div>
              <h2>Authress: Authentication & Authorization</h2>
              <p><a target="_blank" href="https://authress.io">User Management and Access Control</a>
                <br>Quick start complete application security, by adding Authress to your stack.
                <br><br>

                Authress is the only complete authentication solution for B2B, so it helps gets your application security most of the way towards compliance. If you're looking for an alternative list of solutions, the <a target="_blank" href="https://authress.io/knowledge-base/articles/auth-situation-report">Auth Situation Report</a> contains many more.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div id="tools" class="w-100">
      <div class="m-0 p-4 p-4 p-md-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom header-link" @click="() => navigateTo('tools')">Tools</h2>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-2">
          
          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-brands fa-aws fa-2x fa-fw" />
            </div>
            <div>
              <h2>Create emergency access roles in AWS</h2>
              <p><a target="_blank" href="https://github.com/awslabs/aws-break-glass-role#aws-break-glass-role">AWS Break Glass emergency role configuration</a>
                <br><br>It is recommended to restrict access to the AWS account that hosts your production environment. In these cases it may be necessary to provision a user or role with elevated permissions to be used only in emergency cases.
                
                <br><br>This type of role is typically called a "Break Glass Role" and is usually used in On Call situations or other circumstances when quick mitigating action is needed.
              </p>
            </div>
          </div>

          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-wand-sparkles fa-2x fa-fw" />
            </div>
            <div>
              <h2>Prowler - Perform best practice assessments</h2>
              <p><a target="_blank" href="https://docs.prowler.cloud">Open source documentation & guide</a>
                <br><br>Prowler is an Open Source security tool to perform AWS, GCP and Azure security best practices assessments, audits, incident response, continuous monitoring, hardening and forensics readiness.
                
                <br><br>It contains support for hundreds of controls covering CIS, NIST 800, NIST CSF, CISA, RBI, FedRAMP, PCI-DSS, GDPR, HIPAA, FFIEC, SOC2, GXP, and many more.
              </p>
            </div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-2">
          
          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-brands fa-searchengin fa-2x fa-fw" />
            </div>
            <div>
              <h2>NodeZero</h2>
              <p><a target="_blank" href="https://www.horizon3.ai/nodezero/">Open Source PenTesting Platform</a>
                <br><br>The NodeZeroTM platform empowers your organization to reduce your security risk by autonomously finding exploitable weaknesses in your network, giving you detailed guidance about how to prioritize and fix them, and helping you immediately verify that your fixes are effective.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-minimize fa-2x fa-fw" />
            </div>
            <div>
              <h2>Auth: Situation Report</h2>
              <p><a target="_blank" href="https://authress.io/knowledge-base/articles/auth-situation-report">All you need to know before adding auth to your project</a>
                <br><br>If you’re someone who builds software, no matter if you’re on the backend or frontend or even on the product side, sooner or later you have to concern yourself with securing the thing. Or you realize that data privacy laws are very real and you must have a strategy for user data sharing. So you want to implement some sort of authentication. More likely, you’re looking for a solution, open-source or otherwise, that will solve this problem for you. And here comes confusion. This report has some of the answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" class="w-100">
      <div class="m-0 p-4 p-md-5 bg-primary text-light">
        <div class="g-4 my-2 row">
          <div class="d-flex justify-content-around">
            <div class="d-flex flex-column">
              <h5>SOC 2.FYI</h5>
              <small>Making companies more secure</small>
              <small>© Rhosys AG 2018 - {{ thisYear }}</small>
              <div><a class="networking-link" href="https://rhosys.ch" target="_blank">About Us</a></div>
              <div><a class="networking-link" href="https://rhosys.ch" target="_blank">Contact Us</a></div>
            </div>

            <div class="d-flex">
              <div class="d-flex flex-column me-5">
                <h5>References</h5>
                <small><a class="networking-link" href="#">Home</a></small>
                <small><a class="networking-link" href="#guide">Guide</a></small>
                <small><a class="networking-link" href="#process">Process</a></small>
                <small><a class="networking-link" href="#auditors">Auditors</a></small>
                <small><a class="networking-link" href="#automation-platforms">Automation Platforms</a></small>
              </div>
              <div class="d-flex flex-column">
                <h5>Contribute</h5>
                <small><a class="networking-link" @click="() => openGithub()">GitHub</a></small>
                <small><a class="networking-link" @click="() => openGithub()">Contribute</a></small>
                <small><a class="networking-link" @click="() => openGithub(true)">Suggest an improvement</a></small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { DateTime } from 'luxon';

import homeNavbar from './homeNavbar.vue';
import aicpaLogo from './aicpaLogo.png';
import logger from '../logger';
import Auditors from './auditors.vue';
import Platforms from './platforms.vue';

import { navigateTo, openGithub } from './utilities';

if (!window.location.href.match('localhost')) {
  logger.log({ title: 'PageHit' });
}

const thisYear = DateTime.utc().year;

</script>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins";

a {
  color: #2e6da4;
}

.guide-section-link {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.networking-link {
  cursor: pointer;
  text-decoration: none;
  color: $light !important;
  &:hover, &:hover * {
    color: $dark !important;
  }
}

.callout-section {
  margin: 1rem auto 0;
  @include media-breakpoint-up(xl) {
    max-width: 49%;
  }
}

.d-flex .fa-brands + div {
  flex-shrink: 0;
}

.community-presence-item {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  min-width: 300px;
}

table.auditors th a {
  text-decoration: none;
}
</style>
