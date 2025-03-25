// Mock project data extracted from home.js
const mockProjects = [
    {
        id: 1,
        title: "Sleep Patterns in Depression",
        description: "This research aims to understand sleep patterns and their impact on cognitive function in individuals with depression.",
        fullDescription: "Sleep disruption is a common symptom of depression that can significantly impact quality of life and recovery. This research project investigates the relationship between sleep patterns and cognitive performance in adults aged 18-25 with mild to moderate depression. By collecting data on sleep habits, duration, and quality, alongside measures of cognitive function, memory, and attention, we hope to better understand how sleep impacts daily functioning in this population and develop more effective interventions.",
        type: "observational",
        location: "Copenhagen",
        duration: "4 weeks",
        startDate: "April 15, 2025",
        endDate: "May 13, 2025",
        criteria: ["18-25 years old", "Diagnosed with mild to moderate depression", "Not taking sleep medications", "No shift work"],
        gender: "all",
        ageRange: "18-25",
        institution: "Copenhagen University Hospital - Psychiatric Department",
        compensation: "500 DKK",
        researchLead: "Dr. Sofia Jensen",
        contactEmail: "depression.sleep.research@example.com",
        contactPhone: "+45 12 34 56 78",
        status: "Recruiting",
        participantsNeeded: 50,
        participantsEnrolled: 12,
        diagnosis: ["Depression og bipolar lidelse"],
        center: "Psykiatrisk Center København",
        timeline: [
            {
                title: "Initial Screening",
                date: "Week 1",
                description: "Completion of depression assessment, sleep quality questionnaires and eligibility screening."
            },
            {
                title: "Sleep Monitoring",
                date: "Weeks 1-4",
                description: "Daily sleep tracking using provided wearable device and sleep diary."
            },
            {
                title: "Cognitive Assessment",
                date: "Weeks 1 and 4",
                description: "Completion of cognitive tests to assess memory, attention, and processing speed."
            },
            {
                title: "Follow-up Interview",
                date: "Week 4",
                description: "Final interview and return of monitoring equipment."
            }
        ],
        team: [
            {
                name: "Dr. Sofia Jensen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/45.jpg"
            },
            {
                name: "Dr. Marcus Nielsen",
                role: "Psychiatrist",
                photo: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
                name: "Lena Schmidt",
                role: "Research Coordinator",
                photo: "https://randomuser.me/api/portraits/women/68.jpg"
            }
        ]
    },
    {
        id: 2,
        title: "Mindfulness for Anxiety Disorders",
        description: "Clinical trial testing a new mindfulness approach for managing anxiety disorders.",
        fullDescription: "Anxiety disorders are among the most common mental health conditions worldwide. This clinical trial evaluates the effectiveness of a novel mindfulness-based intervention program designed to reduce symptoms of generalized anxiety, social anxiety, and panic disorder. The intervention combines guided meditation, cognitive techniques, and behavioral strategies delivered through both in-person sessions and a mobile application.",
        type: "clinical",
        location: "Aarhus",
        duration: "6 months",
        startDate: "May 1, 2025",
        endDate: "November 1, 2025",
        criteria: ["Diagnosed with an anxiety disorder", "Not currently in psychotherapy", "No significant comorbid conditions", "Able to attend weekly sessions"],
        gender: "all",
        ageRange: "36-45",
        institution: "Aarhus University Hospital - Psychiatric Research Unit",
        compensation: "2500 DKK",
        researchLead: "Dr. Lars Petersen",
        contactEmail: "anxiety.mindfulness@example.com",
        contactPhone: "+45 23 45 67 89",
        status: "Recruiting",
        participantsNeeded: 120,
        participantsEnrolled: 43,
        diagnosis: ["Stress og angst"],
        center: "Psykiatrisk Center Amager",
        timeline: [
            {
                title: "Screening Visit",
                date: "Week 1",
                description: "Medical history review, anxiety assessment, and eligibility evaluation."
            },
            {
                title: "Baseline Assessment",
                date: "Week 2",
                description: "Comprehensive psychological evaluation including anxiety measures and quality of life indicators."
            },
            {
                title: "Intervention Phase",
                date: "Weeks 2-26",
                description: "Weekly mindfulness sessions, daily practice, and bi-weekly progress check-ins."
            },
            {
                title: "Final Assessment",
                date: "Week 26",
                description: "Evaluation of mental health outcomes and program effectiveness."
            }
        ],
        team: [
            {
                name: "Dr. Lars Petersen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/22.jpg"
            },
            {
                name: "Dr. Anna Sørensen",
                role: "Clinical Psychologist",
                photo: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
                name: "Thomas Berg",
                role: "Mindfulness Instructor",
                photo: "https://randomuser.me/api/portraits/men/41.jpg"
            }
        ]
    },
    {
        id: 3,
        title: "Women's Mental Health Survey",
        description: "A comprehensive survey on women's mental health concerns, access to psychiatric care, and wellness practices.",
        fullDescription: "This research project aims to collect data on women's mental health experiences, concerns, and healthcare access across different age groups and demographics. The survey covers topics including preventive mental healthcare practices, reproductive mental health, wellbeing, mood disorders, and satisfaction with psychiatric services. The findings will help inform mental healthcare policy and identify areas where women's psychiatric services could be improved.",
        type: "survey",
        location: "Online",
        duration: "1 hour",
        startDate: "Immediate",
        endDate: "Ongoing",
        criteria: ["Female identifying", "Regular access to mental healthcare", "Able to complete an online survey in English or Danish"],
        gender: "female",
        ageRange: "26-35",
        institution: "Danish Women's Mental Health Research Institute",
        compensation: "200 DKK gift card",
        researchLead: "Dr. Emma Larsen",
        contactEmail: "womens.mental.health.survey@example.com",
        contactPhone: "+45 34 56 78 90",
        status: "Open",
        participantsNeeded: 2000,
        participantsEnrolled: 543,
        diagnosis: ["Ingen"],
        center: "Psykiatrisk Center Ballerup",
        timeline: [
            {
                title: "Survey Completion",
                date: "Single session",
                description: "Complete the comprehensive online mental health survey (approx. 60 minutes)."
            },
            {
                title: "Optional Follow-up",
                date: "If selected",
                description: "Some participants may be invited for a brief follow-up interview."
            }
        ],
        team: [
            {
                name: "Dr. Emma Larsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/28.jpg"
            },
            {
                name: "Dr. Sofia Andersen",
                role: "Women's Mental Health Specialist",
                photo: "https://randomuser.me/api/portraits/women/53.jpg"
            },
            {
                name: "Maria Poulsen",
                role: "Research Analyst",
                photo: "https://randomuser.me/api/portraits/women/79.jpg"
            }
        ]
    },
    {
        id: 4,
        title: "Workplace Stress and Burnout Prevention",
        description: "Investigating the effectiveness of different stress management techniques in preventing workplace burnout.",
        fullDescription: "Work-related stress and burnout affect mental health, productivity, and quality of life for many professionals. This study evaluates the impact of three different mental health interventions in office environments: mindfulness meditation, cognitive behavioral techniques, and resilience training. Participants will be randomly assigned to one intervention and will practice the technique for 8 weeks, with regular assessments of stress levels, burnout indicators, and psychological wellbeing.",
        type: "observational",
        location: "Odense",
        duration: "8 weeks",
        startDate: "April 20, 2025",
        endDate: "June 15, 2025",
        criteria: ["Full-time employed in office environment", "Self-reported workplace stress", "No current psychiatric treatment", "Willingness to practice assigned technique"],
        gender: "all",
        ageRange: "26-35",
        institution: "University of Southern Denmark - Department of Occupational Psychiatry",
        compensation: "1000 DKK",
        researchLead: "Dr. Mikkel Rasmussen",
        contactEmail: "workplace.burnout@example.com",
        contactPhone: "+45 45 67 89 01",
        status: "Recruiting",
        participantsNeeded: 90,
        participantsEnrolled: 27,
        diagnosis: ["Stress og angst"],
        center: "Psykiatrisk Center Glostrup",
        timeline: [
            {
                title: "Initial Assessment",
                date: "Week 1",
                description: "Baseline stress measures, burnout assessment, and mental health screening."
            },
            {
                title: "Intervention Assignment",
                date: "Week 1",
                description: "Random assignment to one of three stress management techniques."
            },
            {
                title: "Practice Period",
                date: "Weeks 1-8",
                description: "Daily practice of assigned technique with weekly progress tracking."
            },
            {
                title: "Final Assessment",
                date: "Week 8",
                description: "Post-intervention stress measures and psychological wellbeing assessment."
            }
        ],
        team: [
            {
                name: "Dr. Mikkel Rasmussen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/67.jpg"
            },
            {
                name: "Dr. Louise Thomsen",
                role: "Occupational Psychiatrist",
                photo: "https://randomuser.me/api/portraits/women/42.jpg"
            },
            {
                name: "Jonas Eriksen",
                role: "Research Assistant",
                photo: "https://randomuser.me/api/portraits/men/55.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "PTSD Treatment Innovation",
        description: "Study on novel therapeutic approaches for post-traumatic stress disorder in middle-aged men.",
        fullDescription: "This research project examines the effectiveness of a new therapeutic approach for treating PTSD in men aged 46 and older. The study will combine traditional cognitive processing therapy with innovative virtual reality exposure techniques, and assess their impact on PTSD symptoms, sleep quality, and overall mental wellbeing. The goal is to identify more effective treatments for this demographic that often faces barriers to seeking and continuing mental health care.",
        type: "clinical",
        location: "Aalborg",
        duration: "3 months",
        startDate: "June 1, 2025",
        endDate: "September 1, 2025",
        criteria: ["Male", "Age 46 or older", "PTSD diagnosis", "Not currently in trauma-focused therapy", "No active substance use disorder"],
        gender: "male",
        ageRange: "46+",
        institution: "Aalborg University Hospital - Trauma Research Center",
        compensation: "1500 DKK",
        researchLead: "Dr. Anders Nielsen",
        contactEmail: "ptsd.treatment@example.com",
        contactPhone: "+45 56 78 90 12",
        status: "Recruiting",
        participantsNeeded: 150,
        participantsEnrolled: 42,
        diagnosis: ["Psykose, skizofreni og skizotypi"],
        center: "Psykiatrisk Center Sct. Hans",
        timeline: [
            {
                title: "Initial Assessment",
                date: "Week 1",
                description: "Comprehensive PTSD evaluation and eligibility assessment."
            },
            {
                title: "Treatment Period",
                date: "Weeks 1-12",
                description: "Weekly therapy sessions combining traditional and VR-based approaches."
            },
            {
                title: "Mid-point Check",
                date: "Week 6",
                description: "Brief follow-up assessment and treatment protocol adjustment if needed."
            },
            {
                title: "Final Evaluation",
                date: "Week 12",
                description: "Comprehensive final assessment and review of symptomatic changes."
            }
        ],
        team: [
            {
                name: "Dr. Anders Nielsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/76.jpg"
            },
            {
                name: "Dr. Henrik Jensen",
                role: "Trauma Specialist",
                photo: "https://randomuser.me/api/portraits/men/15.jpg"
            },
            {
                name: "Kristian Møller",
                role: "VR Therapy Technician",
                photo: "https://randomuser.me/api/portraits/men/37.jpg"
            }
        ]
    },
    {
        id: 6,
        title: "Digital Tech and Mental Wellbeing",
        description: "Survey on digital device usage and its impact on mental health and psychological wellbeing.",
        fullDescription: "This survey-based study investigates the relationship between digital technology usage patterns and various aspects of mental wellbeing. Participants will complete a comprehensive survey about their device usage habits, social media engagement, online activities, and perceived impacts on their mental health, mood regulation, anxiety levels, and social connections. The research aims to identify both positive and negative correlations between digital behaviors and psychological outcomes.",
        type: "survey",
        location: "Online",
        duration: "30 minutes",
        startDate: "Immediate",
        endDate: "Ongoing",
        criteria: ["Regular smartphone and/or computer user", "Active on at least one social media platform", "Can complete online survey in English or Danish"],
        gender: "all",
        ageRange: "18-25",
        institution: "Digital Mental Health Research Center",
        compensation: "Entry into prize draw (10 x 500 DKK)",
        researchLead: "Dr. Nanna Christensen",
        contactEmail: "digital.mental.health@example.com",
        contactPhone: "+45 67 89 01 23",
        status: "Open",
        participantsNeeded: 1000,
        participantsEnrolled: 278,
        diagnosis: ["Ingen"],
        center: "Psykiatrisk Center Stolpegård",
        timeline: [
            {
                title: "Survey Completion",
                date: "Single session",
                description: "Complete the comprehensive online survey about digital habits and mental wellbeing (approx. 30 minutes)."
            },
            {
                title: "Optional Follow-up",
                date: "If selected",
                description: "Some participants may be invited for a follow-up survey in 6 months."
            }
        ],
        team: [
            {
                name: "Dr. Nanna Christensen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/63.jpg"
            },
            {
                name: "Dr. Simon Hansen",
                role: "Digital Behavior Specialist",
                photo: "https://randomuser.me/api/portraits/men/24.jpg"
            },
            {
                name: "Julie Fischer",
                role: "Research Coordinator",
                photo: "https://randomuser.me/api/portraits/women/10.jpg"
            }
        ]
    },
    {
        id: 7,
        title: "Cognitive Behavioral Therapy for OCD",
        description: "Evaluating a modified CBT protocol specifically designed for adults with treatment-resistant OCD.",
        type: "clinical",
        location: "Copenhagen",
        duration: "12 weeks",
        startDate: "June 15, 2025",
        criteria: ["OCD diagnosis", "Previous therapy experience", "Ages 25-55"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["AD(H)D, OCD og Tourette"],
        center: "Psykiatrisk Center København",
        status: "Recruiting",
        fullDescription: "This study evaluates a modified cognitive behavioral therapy protocol designed specifically for adults with treatment-resistant OCD. The approach combines traditional exposure and response prevention techniques with novel cognitive restructuring methods and digital support tools.",
        institution: "Copenhagen University Hospital - Mental Health Services",
        compensation: "1200 DKK",
        researchLead: "Dr. Johan Knudsen",
        contactEmail: "ocd.research@example.com",
        contactPhone: "+45 78 90 12 34",
        participantsNeeded: 60,
        participantsEnrolled: 18,
        timeline: [
            {
                title: "Screening Assessment",
                date: "Week 1",
                description: "Comprehensive OCD evaluation and eligibility assessment."
            },
            {
                title: "Treatment Phase",
                date: "Weeks 2-11",
                description: "Weekly CBT sessions with home practice assignments."
            },
            {
                title: "Final Evaluation",
                date: "Week 12",
                description: "Post-treatment assessment and symptom review."
            }
        ],
        team: [
            {
                name: "Dr. Johan Knudsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/42.jpg"
            },
            {
                name: "Dr. Mette Larsen",
                role: "CBT Specialist",
                photo: "https://randomuser.me/api/portraits/women/37.jpg"
            }
        ]
    },
    {
        id: 8,
        title: "Technology-Assisted Therapy for Adolescents",
        description: "Testing a new app-based intervention to supplement traditional therapy for teens with anxiety and depression.",
        type: "clinical",
        location: "Online + Odense",
        duration: "16 weeks",
        startDate: "May 10, 2025",
        criteria: ["Ages 13-18", "Anxiety or depression", "Smartphone access"],
        gender: "all",
        ageRange: "18-25",
        diagnosis: ["Depression og bipolar lidelse", "Stress og angst"],
        center: "Børne- og Ungdomspsykiatrisk Center",
        status: "Recruiting",
        fullDescription: "This clinical trial evaluates the effectiveness of a smartphone application designed to supplement traditional therapy for adolescents with anxiety and depression. The app provides mood tracking, coping skill exercises, and between-session support.",
        institution: "Odense University Hospital - Child and Adolescent Psychiatry",
        compensation: "800 DKK + free app access for 1 year post-study",
        researchLead: "Dr. Trine Petersen",
        contactEmail: "teen.app.therapy@example.com",
        contactPhone: "+45 89 01 23 45",
        participantsNeeded: 100,
        participantsEnrolled: 38,
        timeline: [
            {
                title: "Initial Assessment",
                date: "Week 1",
                description: "Clinical evaluation and app setup assistance."
            },
            {
                title: "App-Assisted Therapy",
                date: "Weeks 1-16",
                description: "Biweekly therapy sessions plus daily app use."
            },
            {
                title: "Final Evaluation",
                date: "Week 16",
                description: "Post-intervention assessment."
            }
        ],
        team: [
            {
                name: "Dr. Trine Petersen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/26.jpg"
            },
            {
                name: "Lars Andersen",
                role: "App Developer",
                photo: "https://randomuser.me/api/portraits/men/29.jpg"
            }
        ]
    },
    {
        id: 9,
        title: "Neurofeedback Training for ADHD",
        description: "Examining the efficacy of neurofeedback training in adults with ADHD who prefer non-medication approaches.",
        type: "clinical",
        location: "Aalborg",
        duration: "10 weeks",
        startDate: "July 5, 2025",
        criteria: ["ADHD diagnosis", "Age 21-40", "No stimulant medications"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["AD(H)D, OCD og Tourette"],
        center: "Psykiatrisk Center Nordsjælland",
        status: "Recruiting",
        fullDescription: "This study investigates whether a 10-week neurofeedback training program can improve attention, impulse control, and executive functioning in adults with ADHD who prefer non-medication approaches to treatment.",
        institution: "Aalborg University - Department of Psychology",
        compensation: "1800 DKK",
        researchLead: "Dr. Anders Mortensen",
        contactEmail: "adhd.neurofeedback@example.com",
        contactPhone: "+45 90 12 34 56",
        participantsNeeded: 40,
        participantsEnrolled: 12,
        timeline: [
            {
                title: "Baseline Assessment",
                date: "Week 1",
                description: "ADHD symptom evaluation and cognitive testing."
            },
            {
                title: "Neurofeedback Sessions",
                date: "Weeks 2-9",
                description: "Twice-weekly neurofeedback training sessions."
            },
            {
                title: "Post-Assessment",
                date: "Week 10",
                description: "Final symptom and cognitive evaluation."
            }
        ],
        team: [
            {
                name: "Dr. Anders Mortensen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/43.jpg"
            },
            {
                name: "Dr. Sofie Nielsen",
                role: "Neurofeedback Specialist",
                photo: "https://randomuser.me/api/portraits/women/39.jpg"
            }
        ]
    },
    {
        id: 10,
        title: "Autistic Adults Social Skills Groups",
        description: "Research on the effectiveness of peer-led social skills groups for autistic adults.",
        type: "observational",
        location: "Copenhagen",
        duration: "6 months",
        startDate: "June 1, 2025",
        criteria: ["Autism diagnosis", "Age 18+", "Interest in social skills development"],
        gender: "all",
        ageRange: "18-25",
        diagnosis: ["Autisme"],
        center: "Psykiatrisk Center Ballerup",
        status: "Recruiting",
        fullDescription: "This study evaluates the effectiveness of peer-led social skills groups for autistic adults. Groups will meet weekly to practice social interaction strategies and build community connections.",
        institution: "Center for Autism Research - Copenhagen",
        compensation: "1000 DKK",
        researchLead: "Dr. Karen Jensen",
        contactEmail: "autism.socialskills@example.com",
        contactPhone: "+45 01 23 45 67",
        participantsNeeded: 30,
        participantsEnrolled: 8,
        timeline: [
            {
                title: "Initial Interview",
                date: "Week 1",
                description: "Baseline social functioning assessment and group assignment."
            },
            {
                title: "Group Sessions",
                date: "Weeks 2-23",
                description: "Weekly 2-hour social skills group meetings."
            },
            {
                title: "Final Assessment",
                date: "Week 24",
                description: "Post-group evaluation and feedback."
            }
        ],
        team: [
            {
                name: "Dr. Karen Jensen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/48.jpg"
            },
            {
                name: "Mads Pedersen",
                role: "Peer Group Facilitator",
                photo: "https://randomuser.me/api/portraits/men/35.jpg"
            }
        ]
    },
    {
        id: 11,
        title: "Bipolar Disorder Sleep Patterns",
        description: "Investigating the relationship between sleep patterns and mood stability in people with bipolar disorder.",
        type: "observational",
        location: "Aarhus",
        duration: "3 months",
        startDate: "May 15, 2025",
        criteria: ["Bipolar I or II diagnosis", "Not in acute episode", "No sleep disorders"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["Depression og bipolar lidelse"],
        center: "Psykiatrisk Center Amager",
        status: "Recruiting",
        fullDescription: "This study examines how sleep patterns and circadian rhythms impact mood stability in individuals with bipolar disorder. Participants will use sleep tracking technology and mood monitoring to identify patterns and potential early warning signs of mood episodes.",
        institution: "Aarhus University Hospital - Mood Disorders Clinic",
        compensation: "1200 DKK + sleep tracker to keep",
        researchLead: "Dr. Thomas Møller",
        contactEmail: "bipolar.sleep@example.com",
        contactPhone: "+45 12 34 56 78",
        participantsNeeded: 50,
        participantsEnrolled: 22,
        timeline: [
            {
                title: "Baseline Assessment",
                date: "Week 1",
                description: "Clinical evaluation and sleep monitoring setup."
            },
            {
                title: "Monitoring Period",
                date: "Weeks 1-12",
                description: "Daily sleep and mood tracking with monthly check-ins."
            },
            {
                title: "Final Assessment",
                date: "Week 12",
                description: "Data review and personalized feedback."
            }
        ],
        team: [
            {
                name: "Dr. Thomas Møller",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/51.jpg"
            },
            {
                name: "Dr. Line Hansen",
                role: "Sleep Specialist",
                photo: "https://randomuser.me/api/portraits/women/44.jpg"
            }
        ]
    },
    {
        id: 12,
        title: "Trauma-Focused Yoga for PTSD",
        description: "Examining the benefits of trauma-sensitive yoga practices for women with PTSD from domestic violence.",
        type: "clinical",
        location: "Odense",
        duration: "8 weeks",
        startDate: "July 10, 2025",
        criteria: ["Female", "PTSD diagnosis", "History of domestic violence", "No active substance use"],
        gender: "female",
        ageRange: "26-35",
        diagnosis: ["Psykose, skizofreni og skizotypi", "Stress og angst"],
        center: "Psykiatrisk Center Glostrup",
        status: "Recruiting",
        fullDescription: "This study evaluates the effectiveness of a trauma-sensitive yoga program designed specifically for women with PTSD resulting from domestic violence. The program focuses on bodily awareness, safety, and choice-making.",
        institution: "Odense Women's Crisis Center - Research Division",
        compensation: "1000 DKK",
        researchLead: "Dr. Maria Andersen",
        contactEmail: "trauma.yoga@example.com",
        contactPhone: "+45 23 45 67 89",
        participantsNeeded: 40,
        participantsEnrolled: 15,
        timeline: [
            {
                title: "Initial Assessment",
                date: "Week 1",
                description: "PTSD symptom evaluation and program introduction."
            },
            {
                title: "Yoga Program",
                date: "Weeks 1-8",
                description: "Twice-weekly trauma-sensitive yoga sessions."
            },
            {
                title: "Follow-up",
                date: "Week 8",
                description: "Post-program symptom assessment."
            }
        ],
        team: [
            {
                name: "Dr. Maria Andersen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/56.jpg"
            },
            {
                name: "Sara Jensen",
                role: "Trauma-Informed Yoga Instructor",
                photo: "https://randomuser.me/api/portraits/women/62.jpg"
            }
        ]
    },
    {
        id: 13,
        title: "Men's Mental Health Attitudes",
        description: "Survey exploring attitudes toward mental health services among men of different age groups and backgrounds.",
        type: "survey",
        location: "Online",
        duration: "20 minutes",
        startDate: "Immediate",
        criteria: ["Male", "Age 18+", "Danish resident"],
        gender: "male",
        ageRange: "all",
        diagnosis: ["Ingen"],
        center: "Psykiatrisk Center Sct. Hans",
        status: "Open",
        fullDescription: "This survey study explores attitudes, beliefs, and barriers related to mental health services among Danish men. The research aims to identify factors that influence help-seeking behaviors and inform better service approaches for this population.",
        institution: "Danish Men's Health Research Consortium",
        compensation: "Entry into prize draw (5 x 1000 DKK)",
        researchLead: "Dr. Jesper Nielsen",
        contactEmail: "mens.mental.health@example.com",
        contactPhone: "+45 34 56 78 90",
        participantsNeeded: 500,
        participantsEnrolled: 178,
        timeline: [
            {
                title: "Survey Completion",
                date: "Single session",
                description: "Complete online survey about mental health attitudes (20 minutes)."
            }
        ],
        team: [
            {
                name: "Dr. Jesper Nielsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/63.jpg"
            },
            {
                name: "Dr. Mikkel Larsen",
                role: "Research Psychologist",
                photo: "https://randomuser.me/api/portraits/men/27.jpg"
            }
        ]
    },
    {
        id: 14,
        title: "Recovery Narratives in Schizophrenia",
        description: "Qualitative study examining personal narratives of recovery in people with schizophrenia spectrum disorders.",
        type: "observational",
        location: "Copenhagen",
        duration: "2 interviews (2 hours each)",
        startDate: "June 20, 2025",
        criteria: ["Schizophrenia spectrum diagnosis", "In stable recovery for 1+ years"],
        gender: "all",
        ageRange: "36-45",
        diagnosis: ["Psykose, skizofreni og skizotypi"],
        center: "Psykiatrisk Center København",
        status: "Recruiting",
        fullDescription: "This qualitative research focuses on the personal recovery narratives of individuals with schizophrenia spectrum disorders who have achieved meaningful stability in their lives. Through in-depth interviews, the study aims to identify common themes in recovery journeys.",
        institution: "Copenhagen University - Department of Psychology",
        compensation: "700 DKK",
        researchLead: "Dr. Christina Mortensen",
        contactEmail: "schizophrenia.recovery@example.com",
        contactPhone: "+45 45 67 89 01",
        participantsNeeded: 20,
        participantsEnrolled: 8,
        timeline: [
            {
                title: "First Interview",
                date: "Scheduled individually",
                description: "Life history and mental health journey interview (2 hours)."
            },
            {
                title: "Second Interview",
                date: "2 weeks after first",
                description: "Recovery-focused follow-up interview (2 hours)."
            }
        ],
        team: [
            {
                name: "Dr. Christina Mortensen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/72.jpg"
            },
            {
                name: "Dr. Frederik Hansen",
                role: "Qualitative Researcher",
                photo: "https://randomuser.me/api/portraits/men/68.jpg"
            }
        ]
    },
    {
        id: 15,
        title: "Mindfulness for Teen Eating Disorders",
        description: "Testing a mindfulness-based intervention for adolescents with eating disorders.",
        type: "clinical",
        location: "Aarhus",
        duration: "10 weeks",
        startDate: "August 5, 2025",
        criteria: ["Ages 14-18", "Eating disorder diagnosis", "Medically stable"],
        gender: "all",
        ageRange: "18-25",
        diagnosis: ["Spiseforstyrrelse"],
        center: "Børne- og Ungdomspsykiatrisk Center",
        status: "Recruiting",
        fullDescription: "This clinical trial evaluates a mindfulness-based intervention specifically adapted for adolescents with eating disorders. The program combines elements of mindful eating, body awareness, and self-compassion practices.",
        institution: "Aarhus University Hospital - Eating Disorders Unit",
        compensation: "900 DKK",
        researchLead: "Dr. Lise Jensen",
        contactEmail: "teen.eating.disorders@example.com",
        contactPhone: "+45 56 78 90 12",
        participantsNeeded: 30,
        participantsEnrolled: 8,
        timeline: [
            {
                title: "Assessment",
                date: "Week 1",
                description: "Initial evaluation and program introduction."
            },
            {
                title: "Group Sessions",
                date: "Weeks 2-9",
                description: "Weekly 90-minute mindfulness group sessions."
            },
            {
                title: "Final Evaluation",
                date: "Week 10",
                description: "Post-program assessment and feedback."
            }
        ],
        team: [
            {
                name: "Dr. Lise Jensen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/83.jpg"
            },
            {
                name: "Camilla Nielsen",
                role: "Mindfulness Instructor",
                photo: "https://randomuser.me/api/portraits/women/18.jpg"
            }
        ]
    },
    {
        id: 16,
        title: "Digital Mental Health Access in Rural Communities",
        description: "Survey on barriers to accessing digital mental health services in rural Danish communities.",
        type: "survey",
        location: "Online",
        duration: "25 minutes",
        startDate: "Immediate",
        criteria: ["Rural resident", "Age 18+", "With or without mental health conditions"],
        gender: "all",
        ageRange: "all",
        diagnosis: ["Ingen"],
        center: "Psykiatrisk Center Bornholm",
        status: "Open",
        fullDescription: "This survey explores challenges and barriers that rural Danish residents face in accessing digital mental health services. The research aims to identify infrastructural, technological, and attitudinal factors affecting telehealth utilization.",
        institution: "Danish Rural Health Research Network",
        compensation: "150 DKK gift card",
        researchLead: "Dr. Søren Christensen",
        contactEmail: "rural.mental.health@example.com",
        contactPhone: "+45 67 89 01 23",
        participantsNeeded: 300,
        participantsEnrolled: 118,
        timeline: [
            {
                title: "Survey Completion",
                date: "Single session",
                description: "Complete online survey about digital mental health service access (25 minutes)."
            }
        ],
        team: [
            {
                name: "Dr. Søren Christensen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/74.jpg"
            },
            {
                name: "Maja Hansen",
                role: "Rural Health Specialist",
                photo: "https://randomuser.me/api/portraits/women/91.jpg"
            }
        ]
    },
    {
        id: 17,
        title: "Substance Use and Anxiety Treatment",
        description: "Investigating integrated treatment approaches for co-occurring substance use and anxiety disorders.",
        type: "clinical",
        location: "Copenhagen",
        duration: "14 weeks",
        startDate: "July 1, 2025",
        criteria: ["Anxiety diagnosis", "History of substance use", "Currently abstinent (min. 30 days)"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["Psykisk sygdom som følge af misbrug", "Stress og angst"],
        center: "Psykiatrisk Center Stolpegård",
        status: "Recruiting",
        fullDescription: "This study tests an integrated treatment approach for individuals with co-occurring anxiety disorders and substance use history. The program addresses both conditions simultaneously through a combination of CBT techniques and relapse prevention strategies.",
        institution: "Copenhagen Addiction Research Center",
        compensation: "1400 DKK",
        researchLead: "Dr. Henrik Rasmussen",
        contactEmail: "anxiety.substance.use@example.com",
        contactPhone: "+45 78 90 12 34",
        participantsNeeded: 60,
        participantsEnrolled: 22,
        timeline: [
            {
                title: "Screening",
                date: "Week 1",
                description: "Comprehensive assessment of anxiety and substance use history."
            },
            {
                title: "Treatment Phase",
                date: "Weeks 2-13",
                description: "Weekly individual and group therapy sessions."
            },
            {
                title: "Final Assessment",
                date: "Week 14",
                description: "Post-treatment evaluation."
            }
        ],
        team: [
            {
                name: "Dr. Henrik Rasmussen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/81.jpg"
            },
            {
                name: "Dr. Nina Andersen",
                role: "Addiction Specialist",
                photo: "https://randomuser.me/api/portraits/women/77.jpg"
            }
        ]
    },
    {
        id: 18,
        title: "Virtual Reality Exposure for Phobias",
        description: "Testing the effectiveness of VR exposure therapy for specific phobias in older adults.",
        type: "clinical",
        location: "Aalborg",
        duration: "6 weeks",
        startDate: "June 10, 2025",
        criteria: ["Age 55+", "Specific phobia diagnosis", "No cardiovascular conditions"],
        gender: "all",
        ageRange: "46+",
        diagnosis: ["Stress og angst"],
        center: "Psykiatrisk Center Nordsjælland",
        status: "Recruiting",
        fullDescription: "This clinical trial evaluates the effectiveness of virtual reality exposure therapy for treating specific phobias in adults aged 55 and older. The treatment offers immersive, controlled exposure scenarios that can be carefully calibrated to each participant's therapeutic needs.",
        institution: "Aalborg University - VR Therapy Research Lab",
        compensation: "1100 DKK",
        researchLead: "Dr. Peter Madsen",
        contactEmail: "vr.phobia.treatment@example.com",
        contactPhone: "+45 89 01 23 45",
        participantsNeeded: 40,
        participantsEnrolled: 12,
        timeline: [
            {
                title: "Assessment",
                date: "Week 1",
                description: "Phobia evaluation and VR introduction session."
            },
            {
                title: "VR Sessions",
                date: "Weeks 2-5",
                description: "Weekly VR exposure therapy sessions."
            },
            {
                title: "Final Evaluation",
                date: "Week 6",
                description: "Post-treatment assessment."
            }
        ],
        team: [
            {
                name: "Dr. Peter Madsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/83.jpg"
            },
            {
                name: "Dr. Emma Nielsen",
                role: "VR Therapy Specialist",
                photo: "https://randomuser.me/api/portraits/women/59.jpg"
            }
        ]
    },
    {
        id: 19,
        title: "Brain Injury and Mood Changes",
        description: "Research examining the relationship between traumatic brain injury and subsequent mood disorders.",
        type: "observational",
        location: "Odense",
        duration: "Single 3-hour assessment",
        startDate: "Ongoing",
        criteria: ["History of traumatic brain injury", "1+ years post-injury", "Age 25-65"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["Hjerneskade", "Depression og bipolar lidelse"],
        center: "Psykiatrisk Center Glostrup",
        status: "Recruiting",
        fullDescription: "This study investigates the relationship between traumatic brain injury and the development of mood disorders. Participants undergo comprehensive neuropsychological testing and mood assessment to identify patterns and correlations.",
        institution: "Odense University Hospital - Neuropsychiatry Unit",
        compensation: "600 DKK",
        researchLead: "Dr. Jens Pedersen",
        contactEmail: "brain.injury.mood@example.com",
        contactPhone: "+45 90 12 34 56",
        participantsNeeded: 80,
        participantsEnrolled: 37,
        timeline: [
            {
                title: "Assessment Session",
                date: "Single appointment",
                description: "Comprehensive 3-hour neuropsychological and mood assessment."
            }
        ],
        team: [
            {
                name: "Dr. Jens Pedersen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/87.jpg"
            },
            {
                name: "Dr. Katrine Jensen",
                role: "Neuropsychologist",
                photo: "https://randomuser.me/api/portraits/women/66.jpg"
            }
        ]
    },
    {
        id: 20,
        title: "Personality Disorders and Relationship Patterns",
        description: "Study on interpersonal relationship patterns among individuals with different personality disorder diagnoses.",
        type: "observational",
        location: "Copenhagen",
        duration: "4 interviews over 2 months",
        startDate: "July 15, 2025",
        criteria: ["Personality disorder diagnosis", "Currently in treatment", "Age 25-50"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["Personlighedsforstyrrelse og selvskade"],
        center: "Psykiatrisk Center Stolpegård",
        status: "Recruiting",
        fullDescription: "This observational study examines interpersonal relationship patterns among people with various personality disorder diagnoses. Through interviews and relationship mapping, the research aims to identify common challenges and potential therapeutic targets.",
        institution: "Copenhagen University Hospital - Personality Disorders Clinic",
        compensation: "800 DKK",
        researchLead: "Dr. Anne Larsen",
        contactEmail: "personality.relationships@example.com",
        contactPhone: "+45 01 23 45 67",
        participantsNeeded: 50,
        participantsEnrolled: 18,
        timeline: [
            {
                title: "First Interview",
                date: "Week 1",
                description: "Initial assessment and relationship history."
            },
            {
                title: "Follow-up Interviews",
                date: "Weeks 3, 5, and 8",
                description: "Detailed exploration of relationship patterns."
            }
        ],
        team: [
            {
                name: "Dr. Anne Larsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/93.jpg"
            },
            {
                name: "Dr. Martin Jensen",
                role: "Clinical Psychologist",
                photo: "https://randomuser.me/api/portraits/men/49.jpg"
            }
        ]
    },
    {
        id: 21,
        title: "Music Therapy for Adult ADHD",
        description: "Pilot study exploring music therapy's effects on executive functioning in adults with ADHD.",
        type: "clinical",
        location: "Aarhus",
        duration: "8 weeks",
        startDate: "August 15, 2025",
        criteria: ["ADHD diagnosis", "Age 21-40", "No musical training required"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["AD(H)D, OCD og Tourette"],
        center: "Psykiatrisk Center Amager",
        status: "Recruiting",
        fullDescription: "This pilot study explores the impact of a structured music therapy program on executive functioning, attention, and emotional regulation in adults with ADHD. No prior musical experience is necessary to participate.",
        institution: "Aarhus University - Music Therapy Research Center",
        compensation: "1000 DKK",
        researchLead: "Dr. Morten Nielsen",
        contactEmail: "adhd.music.therapy@example.com",
        contactPhone: "+45 12 34 56 78",
        participantsNeeded: 25,
        participantsEnrolled: 6,
        timeline: [
            {
                title: "Initial Assessment",
                date: "Week 1",
                description: "ADHD symptom evaluation and executive function testing."
            },
            {
                title: "Music Therapy Sessions",
                date: "Weeks 2-7",
                description: "Weekly 90-minute group music therapy sessions."
            },
            {
                title: "Final Assessment",
                date: "Week 8",
                description: "Post-therapy evaluation."
            }
        ],
        team: [
            {
                name: "Dr. Morten Nielsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/92.jpg"
            },
            {
                name: "Sofie Andersen",
                role: "Music Therapist",
                photo: "https://randomuser.me/api/portraits/women/37.jpg"
            }
        ]
    }
];

module.exports = mockProjects;
