import deploymentOverview from '../assets/system-deployment/dept1.jpg'
import deploymentFeatures from '../assets/system-deployment/dept2.jpg'
import deploymentLive from '../assets/system-deployment/dept3.jpg'

// Replace SVGs in src/assets/system-deployment/ with real screenshots (jpg/png/webp).
// Set systemUrl to your deployed app when ready.
export const systemDeploymentData = {
  title: 'System Deployment: CSWDO Web-Based Information Management System',
  overview:
    'The OWWA Integrated Programs and Services Monitoring System (OIPS-MS) is a proposed digital solution designed to improve the monitoring and management of programs and services implemented by the Overseas Workers Welfare Administration (OWWA) in Region IX, particularly at the Pagadian Field Office. The system focuses on tracking beneficiaries of various programs, such as the Balik Pinas, Hanapbuhay Program and scholarship grants. It aims to ensure that livelihood projects remain operational and that scholarship recipients continue their education. By digitizing and centralizing monitoring processes, the system enhances transparency, efficiency, and accountability in program implementation.',
  systemUrl: 'https://oipsms-uhj4d.ondigitalocean.app/login?fbclid=IwY2xjawRiPDxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEewejmXH7VGMg-fItCpQKV1jA0lDCdNPVtw3-tmhB54gEAbAEynHlqIC9QeA0_aem_ydJ2_Fd7fXoVfymoV9xSgg',
  systemLinkLabel: 'Open deployed system',
  images: [
    { src: deploymentOverview, alt: 'Project overview — landing or dashboard' },
    { src: deploymentFeatures, alt: 'Core system features' },
    { src: deploymentLive, alt: 'Deployment or live usage' },
  ],
}
