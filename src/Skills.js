
import React from 'react'
import CircleChart from './CircleChart'

const circleData = [
  {name: 'JS/Node.js', percent: 90, fill: '#8cc84b', icon: 'nodejs-icon.svg'},
  {name: 'Ansible', percent: 80, fill: '#65c8c6', icon: 'ansible-icon.png'},
  {name: 'AngularJS', percent: 60, fill: '#b72833', icon: 'angular-icon.svg'},
  {name: 'Cassandra', percent: 50, fill: '#1387b1', icon: 'cassandra-icon.png'},
  {name: 'Vagrant', percent: 40, fill: '#62a5ce', icon: 'vagrant-icon.svg'},
  {name: 'React', percent: 30, fill: '#00d8ff', icon: 'react-icon.svg'},
  {name: 'Python', percent: 35, fill: '#ffe160', icon: 'python-icon.svg'},
  {name: 'Java', percent: 20, fill: '#cb6b14', icon: 'java-icon.svg'},
  {name: 'Linux', percent: 50, fill: '#2fce3d', icon: 'linux-icon.svg'},
  {name: 'Terraform', percent: 30, fill: '#5C4EE5', icon: 'terraform-icon.svg'},
  {name: 'AWS', percent: 40, fill: '#f7a80d', icon: 'aws-icon.svg'},
  {name: 'Tea Making', percent: 90, fill: '#868585', icon: 'tea-icon.svg'},
].map(metric => {
    return {
      ...metric,
      name: <span><img className="tech-icon" alt={metric.name} src={metric.icon}/>{metric.name}</span>,
    }
  });

export default () => <skills>
  <h1>Skills</h1>
  Relative rating of how I see my technical skills:
  <CircleChart data={circleData}/>
</skills>
