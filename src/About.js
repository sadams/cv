import React from 'react'
export default () => (
  <about>
    <h1>About this CV</h1>
    <h2>Who built it?</h2>
    <p>Sam Adams - but enough about me...</p>

    <h2>How's it built?</h2>
    <ol>
      <li>
      <a href="https://github.com/sadams/cv">Frontend code (React)</a> is
      built and pushed to <a href="https://github.com/sadams/cv/releases">GitHub
      as a 'release'</a>.
      </li>
      <li>
      <a href="https://github.com/sadams/cv-tf">Terraform</a> is used to
      build the infrastructure in AWS.
      </li>
      <li>
      <a href="https://github.com/sadams/cv-ansible">Ansible</a> pulls the
      release package from GitHub to the AWS instance and serves the files
      statically.
      </li>
    </ol>

    <h2>But why didn't you ... <i>[insert valid question here]</i> ?</h2>
    <blockquote>
      <ul>
        <li>... use a PaaS service for an easier life?</li>
        <li>... use S3 buckets instead of NGINX to serve static files?</li>
        <li>... use the AWS GUI - it would have been much easier than Terraform!</li>
        <li>... stop wasting time and use Word like everyone else!</li>
        <li>... make a better UI!? </li>
      </ul>
    </blockquote>

    <p>
    All good points...
    <br></br>
    Firstly, as we all know, PaaS is cheating.
    Secondly, I wanted to know more about Terraform and React, and this was a
    good excuse to learn (with the added bonus of putting off the job hunting
      process.)
    </p>
    <p>
    Regarding the UI: isn't it nice that this doesn't look like GMD or Bootstrap?!
    Sure, it would have looked 'nicer' and been 'quicker', but so much like every other website.
    </p>

    <h2>"yakspa.com"? what's a "yakspa"?</h2>
    <p>
      <i><a href="http://whatis.techtarget.com/definition/yak-shaving" target="_blank">Yak Shaving
      </a></i> : The process of engineering through which many extraneous
      tasks must be completed to achieve a seemingly simple goal.
      Often synonymous with 'over-engineering', although sometimes yak shaving is unavoidable to achieve a goal.
    </p>
    <p>
      Since this CV is so clearly the result of serious 'yak shaving',
      the name 'Yak Spa' seemed appropriate; more than just shaving a yak,
        I have taken it to a spa.
        <br></br>
        (Contrary to the rumours, choosing 'yakspa.com' was in no way driven by
         someone having already taken 'yakshaving.com'.)
    </p>

    <h2>Why does it look like that?</h2>
    <p>
    Obviously (to some) the theme is based on Star Trek TNG's LARS computer
    theme and it has been noted that the graphs look a bit 'Apple Watchy'.
    No, I'm no designer.
    </p>

    <h2>Why is it so over-engineered?</h2>
    <p>
    ... because it's way more fun than a traditional CV.
    Besides, learning to write a Word doc using a text editor would have only taught me things I would need to forget.
    </p>

    <h2>Something is very wrong...</h2>
    <p>Please feel free to report issues on <a href="https://github.com/sadams/cv" target="_blank">GitHub</a>.</p>
  </about>
)
