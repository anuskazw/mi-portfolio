import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface RoadmapTab {
  id: string;
  label: string;
  url: string;
  subTabs?: SubTab[];
}

interface SubTab {
  id: string;
  label: string;
  url: string;
}

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  standalone: false
})
export class RoadmapComponent {
  tabs: RoadmapTab[] = [
    {
      id: 'frontend',
      label: 'Frontend Developer',
      url: 'https://roadmap.sh/frontend',
      subTabs: [
        { id: 'javascript', label: 'JavaScript', url: 'https://roadmap.sh/javascript' },
        { id: 'react', label: 'React', url: 'https://roadmap.sh/react' },
        { id: 'typescript', label: 'TypeScript', url: 'https://roadmap.sh/typescript' },
        { id: 'nodejs', label: 'Node.js', url: 'https://roadmap.sh/nodejs' }
      ]
    },
    {
      id: 'fullstack',
      label: 'Full Stack Developer',
      url: 'https://roadmap.sh/full-stack'
    },
    {
      id: 'backend',
      label: 'Backend Developer',
      url: 'https://roadmap.sh/backend'
    },
    {
      id: 'devops',
      label: 'DevOps Developer',
      url: 'https://roadmap.sh/devops'
    }
  ];

  activeTabId = 'frontend';
  activeSubTabId: string | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  get activeTab(): RoadmapTab {
    return this.tabs.find(t => t.id === this.activeTabId)!;
  }

  get currentUrl(): SafeResourceUrl {
    const url = this.activeSubTabId
      ? this.activeTab.subTabs?.find(s => s.id === this.activeSubTabId)?.url
      : this.activeTab.url;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url || this.activeTab.url);
  }

  selectTab(tabId: string): void {
    this.activeTabId = tabId;
    this.activeSubTabId = null;
  }

  selectSubTab(subTabId: string): void {
    this.activeSubTabId = this.activeSubTabId === subTabId ? null : subTabId;
  }
}
