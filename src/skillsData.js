import React from 'react'
export default [
  {name: 'JS/Node.js', percent: 90, fill: '#8cc84b', icon: '/nodejs-icon.svg', description: (<skill-description>
    <p>
      I have been using JS for over 10 years and node.js for around 4.
    </p>
    <p>
      I have written backend services in node.js, done lots of UI work (using most of the large frameworks) and
      produced lightweight, cross-browser libraries that get consumed by many
      clients across millions of impressions per-day.
    </p>
    <p>
    I have also written some browser extensions, for
    example <a href="https://chrome.google.com/webstore/detail/tagman-url-changer/aepfachknffiglfeondjbmclhdingaad" target="_blank">this one </a>
    (don't judge me - it was a long time ago).
    </p>
    <p>
      I ❤️ JS.
    </p>
  </skill-description>)},
  {name: 'Ansible', percent: 80, fill: '#65c8c6', icon: '/ansible-icon.png', description: <skill-description>
    <p>
      I have been using Ansible for a couple of years for anything from deploying
      software to a fleet of production servers to managing local Vagrant development environments.
      I also have
      written <a href="https://github.com/sadams/ansible-module-cassandra" target="_blank">Ansible modules</a> to
      make automating Cassandra users/roles easier.
    </p>
    <p>
      My biggest complaints with Ansible are in the variable scoping
      and in how to scale it to a large infrastructure.
      Although <a href="http://docs.ansible.com/ansible/playbooks_intro.html#ansible-pull" target="_blank">ansible pull</a> seems like
      a good way to solve scaling issues, it's just not mature enough
       (e.g. doesn't include a way of installing Ansible galaxy dependencies as part of a pull run).
    </p>
    <p>
      That being said, I'm a big fan of Ansible 👍,
      which is why it was used to <a href="https://github.com/sadams/cv-ansible" target="_blank">
      install this CV</a>.
    </p>
  </skill-description>},
  {name: 'AngularJS', percent: 60, fill: '#b72833', icon: '/angular-icon.svg', description: <skill-description>
    <p>
      Hmmm... I have used Angular a fair amount and never got comfortable with it.
      Testing always seemed too hard and the 'code smells' (e.g.
      the DI inferred from the correct argument naming in the method signature)
       have never gone away.<br></br>
       More info in the <a href="#React">react section</a>.
    </p>
    <p>
      ngMeh
    </p>
  </skill-description>},
  {name: 'Cassandra', percent: 50, fill: '#1387b1', icon: '/cassandra-icon.png', description: <skill-description>
    <p>
      Cassandra seems like a great choice because it sells itself as a big data
      store with great replication, high availability and easy administration.
      However, this isn't really true. It is a very low-level service that needs
      a lot of tweaking to get right. You need to really understand the access
      patterns before writing your schema and be aware of how you are going to
      compact/repair your data and how that impacts the settings and topography
      of the cluster. Version are also not always easy to upgrade between.
      If you can stomach some downtime for maintenance and throw some money at
      having powerful instances then Cassandra can work, but be aware
      that <a href="https://www.facebook.com/notes/facebook-engineering/the-underlying-technology-of-messages/454991608919" target="_blank">
      large companies</a> have moved away from Cassandra for good reason.
    </p>
    <p>
      TL;DR: Don't estimate how much dedicated human and machine resource is
      required for real-world cluster 🤞
    </p>
  </skill-description>},
  {name: 'Vagrant', percent: 40, fill: '#62a5ce', icon: '/vagrant-icon.svg', description: <skill-description>
    <p>
      I wasn't sure if this is even a 'skill'.
      I have used Vagrant for a few years to automate configuration of local VMs
      and kick of provisioning via shell/ansible.
      The Ruby Vagrantfile isn't that complex.
      You need to work out how it does some networking stuff and there are some
       great plugins (e.g. <a href="https://github.com/devopsgroup-io/vagrant-hostmanager" target="_blank">
         hostmanager</a> for DNS on host and guest machines), but really it just kind of works... (if in doubt, upgrade your vagrant/virtualbox installs).
    </p>
  </skill-description>},
  {name: 'React', percent: 30, fill: '#00d8ff', icon: '/react-icon.svg', description: <skill-description>
    <p>
      I'm fairly new to React, having only really played with it on personal projects or the odd in-house tool.
      Where I found AngularJS' attempt to persist the HTML/display layer away from the JS very frustrating, React's use
      of JS to completely render HTML made a lot of sense.
    </p>
    <p>
      There is a good article (that I now can't find) that likens JSX to a more natural way for engineers to approach web dev.
      Many years ago, when the only library we used was jQuery, most engineers instinctively did lots of DOM-building in JS.
      However, this quickly became unmanageable, primarily because we had to define our HTML as JS strings, and for many
      years this approach became to be considered a cardinal sin by 'real' engineers.
      Thankfully React and JSX made the bold move to say it was ok to DOM build with JS, and I believe it's a much more
      natural way to work compared with Angular's embedding pseudo JS in the HTML (e.g.
      {/*this is how to force whitespace!!!*/' '}<a href="https://docs.angularjs.org/api/ng/directive/ngRepeat" target="_blank">ngRepeat</a>).
    </p>
    <p>
      <a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create React App</a> was used to build this CV
      and you should definitely take a look if you haven't already. It's not without issue: while writing this I have
      found out that, since my anchor tags are parsed as separate elements, if they are succeeded by linebreaks,
      they are being rendered without a space before the next word... which is unintuitive if you are used to
      writing raw HTML (<a href="https://www.bennadel.com/blog/2880-a-quick-look-at-rendering-white-space-using-jsx-in-reactjs.htm" target="_blank">
      better explanation</a>).
    </p>
    <p>
      <a href="http://redux.js.org/" target="_blank">Redux</a> also makes state easier to handle due to a uni-directional data paradigm,
      but I have only been able to try it on <a href="https://github.com/sadams/todo-redux-react-webpack" target="_blank">personal projects</a>.
      (Although it seems odd to me that adding '<a href="https://github.com/gaearon/redux-thunk" target="_blank">thunk</a>' actions
      are required for any real-world application!)
    </p>
    <p>
    React === 🤘
    </p>

  </skill-description>},
  {name: 'Python', percent: 35, fill: '#ffe160', icon: '/python-icon.svg', description: <skill-description>
    <p>
      After an initial hesitation due to whitespace indentation, I have grown
      to love Python. One big reason is that you can use it on pretty much any
      Linux distro without having to install anything. It's a great replacement
      when 'that bash script' you keep adding to becomes unmanageable.
    </p>
    <p>
      I haven't written any large projects and have only been using it on and
      off for about a year.
      The biggest thing i have done is probably
      this <a href="https://github.com/sadams/ansible-module-cassandra" target="_blank">Cassandra Ansible module</a>.
    </p>
    <p>Who needs a switch statement anyway?</p>

  </skill-description>},
  {name: 'Java', percent: 20, fill: '#cb6b14', icon: '/java-icon.svg', description: <skill-description>
    <p>
      I can read it fine and write it poorly.
      I find the strict typing and the generics/lambdas a bit clunky compared to
      JS (👑 of languages), but I do respect how it encourages a level
      of consistency that is easy to gloss over in scripting languages.
    </p>
    <p>
      There are also some great integration testing frameworks for APIs (
        e.g. <a href="http://resteasy.jboss.org/" target="_blank">resteasy</a>
      ) and no matter what an infrastructure engineer will tell you it can be
      very efficient at handling large volumes of requests.
    </p>

  </skill-description>},
  {name: 'Linux', percent: 50, fill: '#2fce3d', icon: '/linux-icon.svg', description: <skill-description>
    <p>
      This is a pretty amorphous one; there are MANY people MUCH better than me
      at working in a Linux environment (and my VIM skills are only passable),
      but I'm very comfortable with it and have been using it for many years.
    </p>

  </skill-description>},
  {name: 'Terraform', percent: 30, fill: '#5C4EE5', icon: '/terraform-icon.svg', description: <skill-description>
    <p>
      As with Ansible, I'm a big fan 👍,
      and <a href="https://github.com/sadams/cv-tf" target="_blank">TF was
      also used to produce this CV</a>.
    </p>
    <p>I can also
      recommend <a href="https://github.com/dtan4/terraforming" target="_blank">
      Terraforming</a> as a good way of learning how to represent your existing
       infrastructure in the TF DSL.
    </p>
  </skill-description>},
  {name: 'AWS', percent: 40, fill: '#f7a80d', icon: '/aws-icon.svg', description: <skill-description>
    <p>
      I was also not sure knowing your way around AWS counted as a 'skill', but
      I have written lots of scripts to automate interacting with AWS, including
      use of the
      core <a href="https://aws.amazon.com/cli/" target="_blank">AWS CLI</a>,
      the <a href="https://aws.amazon.com/sdk-for-python/" target="_blank">Boto wrapper</a>, <a href="http://docs.ansible.com/ansible/intro_dynamic_inventory.html" target="_blank"> Ansible
      dynamic inventories</a> and using the excellent <a href="https://www.terraform.io/" target="_blank">Terraform</a>.
    </p>

  </skill-description>},
  {name: 'Tea Making', percent: 90, fill: '#868585', icon: '/tea-icon.svg', description: <skill-description>
    <p>
      What can I say - it's all about patience ☕️.
    </p>

  </skill-description>},
]
