import moment from 'moment';

export const defaultDashboard = (project) => {
    const startDate = moment().subtract(6, 'days').startOf('day').toISOString();
    const endDate = moment().endOf('day').toISOString();
    const { _id: projectId, defaultLanguage } = project;
    return ({
        name: 'Default Dashboard',
        projectId,
        languages: [defaultLanguage],
        envs: ['development'],
        cards: [
            {
                name: 'Visits & Engagement',
                description: 'Visits: the total number of conversations in a given temporal window. Engagements: of those conversations, those with length one or more.',
                type: 'conversationCounts',
                visible: true,
                startDate,
                endDate,
                chartType: 'line',
                valueType: 'absolute',
                excludeIntents: ['get_started'],
                wide: true,
                showDenominator: true,
            },
            {
                name: 'Conversation Length',
                type: 'conversationLengths',
                visible: true,
                startDate,
                endDate,
                chartType: 'bar',
                valueType: 'absolute',
            },
            {
                name: 'Top 10 Intents',
                type: 'intentFrequencies',
                visible: true,
                startDate,
                endDate,
                chartType: 'bar',
                valueType: 'absolute',
                excludeIntents: ['get_started'],
            },
            {
                name: 'Conversation Duration',
                type: 'conversationDurations',
                visible: true,
                startDate,
                endDate,
                chartType: 'bar',
                valueType: 'absolute',
            },
            {
                name: 'Conversations with Fallback',
                description: 'The number of conversations in which a fallback action was triggered.',
                type: 'conversationCounts',
                visible: true,
                startDate,
                endDate,
                chartType: 'line',
                valueType: 'absolute',
                includeActions: ['action_botfront_fallback'],
            },
            {
                name: 'Fallback Rate',
                description: 'The number of times a fallback action was triggered.',
                type: 'actionCounts',
                visible: true,
                startDate,
                endDate,
                chartType: 'line',
                valueType: 'absolute',
                includeActions: ['action_botfront_fallback'],
            },
        ],
    });
};
